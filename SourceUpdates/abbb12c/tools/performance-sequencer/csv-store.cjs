const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const tables = [
  { name: 'PerformanceTable', editable: ['name','bgmRuid','bgmVolume','length','vocalWeight','danceWeight','visualWeight'] },
  { name: 'PerformanceCueTable', editable: ['performanceId','time','duration','track','type','targetId','stringParam','num1','num2','num3'] },
];
const cueTypes = new Set(['camera_zoom','camera_move','camera_shake','char_move','char_anim','char_emotion','bgm_volume','sfx','ui_show']);
const str = value => String(value ?? '');

function tableFromValues(config, values) {
  const columns = (values[0] || []).map(str);
  if (new Set(columns).size !== columns.length || columns.includes('') ||
      !['performanceId', ...config.editable].every(key => columns.includes(key))) {
    throw new Error(config.name+'의 CSV 열 구성이 올바르지 않습니다.');
  }
  return {...config, columns, rows:values.slice(1)};
}

function selected(table, performanceId) {
  const index = table.columns.indexOf('performanceId');
  return table.rows.flatMap((cells, i) => str(cells[index]) === performanceId ? [{cells, rowIndex:i+1}] : []);
}

function asObject(table, cells) {
  return Object.fromEntries(table.columns.map((key,i) => [key,str(cells?.[i])]));
}

function readPerformance([headers, cues], performanceId) {
  const headerRows = selected(headers, performanceId);
  if (headerRows.length > 1) throw new Error('CSV에 중복된 공연 ID가 있습니다.');
  const cueRows = selected(cues, performanceId);
  const header = headerRows.length ? asObject(headers,headerRows[0].cells) : null;
  const data = cueRows.map(row => asObject(cues,row.cells));
  const revision = header || data.length ? crypto.createHash('sha256').update(JSON.stringify([header,data])).digest('hex') : null;
  return {performanceId,header,cues:data,revision};
}

function validateInput(body) {
  const performanceId = typeof body?.performanceId === 'string' ? body.performanceId.trim() : '';
  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(performanceId)) throw new Error('공연 ID를 확인하세요.');
  if (!body.header || typeof body.header !== 'object' || !Array.isArray(body.cues) || body.cues.length > 5000) {
    throw new Error('공연 헤더 또는 큐 형식이 올바르지 않습니다.');
  }
  const header = Object.fromEntries(tables[0].editable.map(key=>[key,str(body.header[key])]));
  if (!header.length.trim() || !Number.isFinite(Number(header.length)) || Number(header.length) <= 0) {
    throw new Error('공연 길이는 0보다 커야 합니다.');
  }
  const cues = body.cues.map((input,index)=>{
    if (!input || typeof input !== 'object') throw new Error('큐 '+(index+1)+' 형식이 올바르지 않습니다.');
    const cue = Object.fromEntries(tables[1].editable.map(key=>[key,str(input[key])]));
    cue.performanceId = performanceId;
    if (!cueTypes.has(cue.type) || !cue.time.trim() || !Number.isFinite(Number(cue.time)) || Number(cue.time)<0 ||
        !Number.isFinite(Number(cue.duration)) || Number(cue.duration)<0) {
      throw new Error('큐 '+(index+1)+'의 종류, 시작 시각 또는 길이를 확인하세요.');
    }
    return cue;
  });
  return {performanceId,header,cues,revision:body.revision ?? null};
}

function applyEdits([headers, cues], input) {
  const {performanceId,header}=input;
  const [headerRow]=selected(headers,performanceId);
  const headerValues=headerRow?.cells ?? [];
  const nextHeader=headers.columns.map((key,i)=>key==='performanceId' ? performanceId : header[key] ?? str(headerValues[i]));
  if (headerRow) headers.rows[headerRow.rowIndex-1]=nextHeader;
  else headers.rows.push(nextHeader);

  // 편집기에서 열 수 없는 기존 큐도 CSV에 유지
  const typeColumn=cues.columns.indexOf('type');
  const editable=selected(cues,performanceId).filter(row=>cueTypes.has(str(row.cells[typeColumn])));
  const replacements=new Map(editable.map((row,i)=>{
    const next=input.cues[i];
    if (!next && cues.columns.some((key,j)=>!cues.editable.includes(key) && str(row.cells[j])!=='')) {
      throw new Error('추가 열에 값이 있는 큐는 CSV에서 먼저 정리하세요.');
    }
    return [row.rowIndex-1,next ? cues.columns.map((key,j)=>next[key] ?? str(row.cells[j])) : null];
  }));
  const insertAfter=editable.at(-1)?.rowIndex-1;
  const extra=input.cues.slice(editable.length).map(cue=>cues.columns.map(key=>str(cue[key])));
  cues.rows=cues.rows.flatMap((row,i)=>{
    const replacement=replacements.has(i) ? replacements.get(i) : row;
    return [...(replacement ? [replacement] : []),...(i===insertAfter ? extra : [])];
  });
  if (!editable.length) cues.rows.push(...extra);
}
function normalize(table) {
  return [table.columns,...table.rows.filter(row=>row.some(value=>str(value)!=='')).map(row=>table.columns.map((_,i)=>str(row[i])))];
}

function csvCell(value) {
  return /[",\r\n]/.test(value) ? '"'+value.replace(/"/g,'""')+'"' : value;
}

function syncLocal(dataDir, parsedTables, before) {
  const staged=[];
  try {
    for (const [i,table] of parsedTables.entries()) {
      const target=path.join(dataDir,table.name+'.csv');
      if (fs.readFileSync(target,'utf8')!==before[i]) throw new Error('저장 중 로컬 CSV가 변경됐습니다.');
      const suffix='.'+crypto.randomUUID()+'.tmp';
      const eol=before[i].includes('\r\n') ? '\r\n' : '\n';
      const bom=before[i].startsWith('\uFEFF') ? '\uFEFF' : '';
      const next=bom+normalize(table).map(row=>row.map(csvCell).join(',')).join(eol)+eol;
      if (next===before[i]) continue;
      const entry={target,temp:target+suffix,backup:target+suffix+'.bak',applied:false};
      staged.push(entry);
      fs.writeFileSync(entry.temp,next,{encoding:'utf8',flag:'wx'});
      fs.writeFileSync(entry.backup,before[i],{encoding:'utf8',flag:'wx'});
    }
    for (const entry of staged) {
      fs.renameSync(entry.temp,entry.target);
      entry.applied=true;
    }
  } catch (error) {
    for (const entry of staged.filter(item=>item.applied)) {
      try { fs.renameSync(entry.backup,entry.target); }
      catch { entry.keepBackup=true; }
    }
    throw error;
  } finally {
    for (const entry of staged) {
      for (const file of [entry.temp,entry.keepBackup ? null : entry.backup]) {
        if (file) try { fs.rmSync(file,{force:true}); } catch {}
      }
    }
  }
}

function createStore(dataDir, parseCSV) {
  function readLocal() {
    const raw=tables.map(table=>fs.readFileSync(path.join(dataDir,table.name+'.csv'),'utf8'));
    return {raw, parsed:tables.map((table,i)=>tableFromValues(table,parseCSV(raw[i])))};
  }
  return {
    list() {
      const {parsed}=readLocal();
      const ids=new Set(parsed.flatMap(table=>normalize(table).slice(1).map(row=>row[table.columns.indexOf('performanceId')]).filter(Boolean)));
      return [...ids].map(id=>{
        const p=readPerformance(parsed,id);
        return {performanceId:id,name:p.header?.name || '',cueCount:p.cues.length};
      });
    },
    load(id) { return readPerformance(readLocal().parsed,id); },
    save(body) {
      const input=validateInput(body);
      const {raw,parsed}=readLocal();
      const current=readPerformance(parsed,input.performanceId);
      if (input.revision!==current.revision) {
        throw new Error('로컬 공연이 바뀌었거나 아직 불러오지 않았습니다. 프로젝트에서 다시 불러오세요.');
      }
      applyEdits(parsed,input);
      syncLocal(dataDir,parsed,raw);
      return {...readPerformance(parsed,input.performanceId),cueCount:input.cues.length};
    },
  };
}

module.exports={createStore};
