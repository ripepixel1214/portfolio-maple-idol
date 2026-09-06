// 공연 시퀀서 로컬 서버 (의존성 없음).
//  - 정적 파일 서빙(index.html 등)
//  - 저장/불러오기 API: 프로젝트의 MSW DataSet CSV(RootDesk/MyDesk/Performance/Data)에 직접 기록
// 사용: node serve.cjs [port]   → http://localhost:7788
// ※ 브라우저 보안상 file:// 더블클릭으로는 디스크 저장이 불가하므로, 저장 기능은 이 서버로 열었을 때만 동작합니다.
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = parseInt(process.argv[2], 10) || 7788;
const root = __dirname;
// 프로젝트 루트 = tools/performance-sequencer 에서 두 단계 위
const projectRoot = path.resolve(__dirname, '..', '..');
const DATA_DIR = path.join(projectRoot, 'RootDesk', 'MyDesk', 'Performance', 'Data');
const CUE_FILE = path.join(DATA_DIR, 'PerformanceCueTable.csv');
const PERF_FILE = path.join(DATA_DIR, 'PerformanceTable.csv');

const CUE_COLS = ['performanceId','time','duration','track','type','targetId','stringParam','num1','num2','num3'];
const PERF_COLS = ['performanceId','name','bgmRuid','bgmVolume','length','clearScore','vocalWeight','danceWeight','visualWeight'];

const TYPES = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.csv':'text/csv', '.mp3':'audio/mpeg', '.wav':'audio/wav' };

/* ----------------------- CSV 유틸 (표준 인용 규칙) ----------------------- */
function parseCSV(text){
  text = String(text).replace(/^﻿/, '');
  const rows = []; let row = [], cur = '', inQ = false;
  for (let i=0;i<text.length;i++){
    const ch = text[i];
    if (inQ){
      if (ch === '"'){ if (text[i+1] === '"'){ cur += '"'; i++; } else inQ = false; }
      else cur += ch;
    } else {
      if (ch === '"') inQ = true;
      else if (ch === ',') { row.push(cur); cur=''; }
      else if (ch === '\n' || ch === '\r'){ if (ch==='\r' && text[i+1]==='\n') i++; row.push(cur); rows.push(row); row=[]; cur=''; }
      else cur += ch;
    }
  }
  if (cur !== '' || row.length){ row.push(cur); rows.push(row); }
  return rows.filter(r => r.length && r.some(x => String(x).trim() !== ''));
}
function csvCell(v){
  v = (v===null || v===undefined) ? '' : String(v);
  if (/[",\n\r]/.test(v)) return '"' + v.replace(/"/g,'""') + '"';
  return v;
}
// 파일을 헤더 기준 객체 배열로 읽기 (없으면 빈 배열)
function readTable(file){
  if (!fs.existsSync(file)) return [];
  const rows = parseCSV(fs.readFileSync(file, 'utf8'));
  if (!rows.length) return [];
  const header = rows[0].map(h => h.trim());
  const out = [];
  for (let r=1;r<rows.length;r++){
    const obj = {};
    header.forEach((h,i)=> obj[h] = rows[r][i] !== undefined ? rows[r][i] : '');
    out.push(obj);
  }
  return out;
}
// 객체 배열을 지정 컬럼 순서로 CSV 문자열화 (BOM 없음 = MSW 형식)
function writeTable(file, cols, objs){
  const lines = [cols.join(',')];
  for (const o of objs) lines.push(cols.map(c => csvCell(o[c])).join(','));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, lines.join('\n') + '\n', 'utf8'); // UTF-8, BOM 없음
}

/* ----------------------- 저장/불러오기 처리 ----------------------- */
function handleSave(body){
  const performanceId = (body.performanceId || '').trim();
  if (!performanceId) throw new Error('performanceId 가 비어 있습니다');

  // 1) 큐 테이블: 같은 performanceId 행 제거 후 새 큐 병합 (다른 공연 데이터 보존)
  let cueRows = readTable(CUE_FILE).filter(r => r.performanceId !== performanceId);
  const incoming = (body.cues || []).map(c => ({
    performanceId,
    time: c.time, duration: c.duration, track: c.track, type: c.type,
    targetId: c.targetId, stringParam: c.stringParam,
    num1: c.num1, num2: c.num2, num3: c.num3
  }));
  cueRows = cueRows.concat(incoming);
  // performanceId → time(숫자) 순 정렬
  cueRows.sort((a,b)=> a.performanceId < b.performanceId ? -1 : a.performanceId > b.performanceId ? 1 : (parseFloat(a.time)||0) - (parseFloat(b.time)||0));
  writeTable(CUE_FILE, CUE_COLS, cueRows);

  // 2) 공연 헤더 테이블: 같은 performanceId upsert
  const h = body.header || {};
  let perfRows = readTable(PERF_FILE).filter(r => r.performanceId !== performanceId);
  perfRows.push({ performanceId, name: h.name, bgmRuid: h.bgmRuid, bgmVolume: h.bgmVolume, length: h.length,
                  clearScore: h.clearScore, vocalWeight: h.vocalWeight, danceWeight: h.danceWeight, visualWeight: h.visualWeight });
  perfRows.sort((a,b)=> a.performanceId < b.performanceId ? -1 : a.performanceId > b.performanceId ? 1 : 0);
  writeTable(PERF_FILE, PERF_COLS, perfRows);

  return { ok:true, performanceId, cueCount: incoming.length,
           cueFile: path.relative(projectRoot, CUE_FILE).replace(/\\/g,'/'),
           perfFile: path.relative(projectRoot, PERF_FILE).replace(/\\/g,'/') };
}
function handleList(){
  const perfs = readTable(PERF_FILE);
  const cueRows = readTable(CUE_FILE);
  // 헤더에 없지만 큐에만 있는 performanceId 도 포함
  const ids = new Set(perfs.map(p=>p.performanceId));
  for (const r of cueRows) if (r.performanceId) ids.add(r.performanceId);
  const list = [...ids].map(id => {
    const p = perfs.find(x=>x.performanceId===id) || { performanceId:id };
    const count = cueRows.filter(r=>r.performanceId===id).length;
    return { performanceId:id, name:p.name||'', bgmRuid:p.bgmRuid||'', bgmVolume:p.bgmVolume||'', length:p.length||'', cueCount:count };
  });
  return { ok:true, performances:list };
}
function handleLoad(performanceId){
  performanceId = (performanceId||'').trim();
  const perfs = readTable(PERF_FILE);
  const header = perfs.find(p=>p.performanceId===performanceId) || null;
  const cues = readTable(CUE_FILE).filter(r=>r.performanceId===performanceId)
    .map(r => ({ time:r.time, duration:r.duration, track:r.track, type:r.type, targetId:r.targetId, stringParam:r.stringParam, num1:r.num1, num2:r.num2, num3:r.num3 }));
  return { ok:true, performanceId, header, cues };
}

function sendJSON(res, code, obj){
  const s = JSON.stringify(obj);
  res.writeHead(code, { 'Content-Type':'application/json; charset=utf-8', 'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':'Content-Type', 'Access-Control-Allow-Methods':'GET,POST,OPTIONS' });
  res.end(s);
}

/* ----------------------- 서버 ----------------------- */
http.createServer((req, res) => {
  const u = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(u.pathname);

  if (req.method === 'OPTIONS'){ sendJSON(res, 200, {ok:true}); return; }

  // --- API ---
  if (pathname === '/api/save' && req.method === 'POST'){
    let data = '';
    req.on('data', c => { data += c; if (data.length > 8e6) req.destroy(); });
    req.on('end', () => {
      try { sendJSON(res, 200, handleSave(JSON.parse(data || '{}'))); }
      catch(e){ sendJSON(res, 400, { ok:false, error:String(e && e.message || e) }); }
    });
    return;
  }
  if (pathname === '/api/list' && req.method === 'GET'){
    try { sendJSON(res, 200, handleList()); } catch(e){ sendJSON(res, 500, { ok:false, error:String(e.message||e) }); }
    return;
  }
  if (pathname === '/api/load' && req.method === 'GET'){
    try { sendJSON(res, 200, handleLoad(u.searchParams.get('performanceId'))); } catch(e){ sendJSON(res, 500, { ok:false, error:String(e.message||e) }); }
    return;
  }

  // --- 정적 파일 ---
  let rel = pathname;
  if (rel === '/' || rel === '') rel = '/index.html';
  const file = path.join(root, path.normalize(rel).replace(/^(\.\.[\/\\])+/, ''));
  fs.readFile(file, (err, dataBuf) => {
    if (err){ res.writeHead(404); res.end('Not found: ' + rel); return; }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(dataBuf);
  });
}).listen(port, () => {
  console.log('공연 시퀀서 미리보기: http://localhost:' + port);
  console.log('저장 경로:', path.relative(projectRoot, DATA_DIR).replace(/\\/g,'/'));
});
