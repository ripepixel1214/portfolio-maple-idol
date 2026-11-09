// 공연 시퀀서 로컬 서버
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const {createStore} = require('./csv-store.cjs');

const port = Number(process.argv[2]) || 7788;
const host = '127.0.0.1';
const dataDir = path.resolve(__dirname,'../../RootDesk/MyDesk/Performance/Data');

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

const store = createStore(dataDir,parseCSV);

function sendJSON(res,code,data) {
  res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});
  res.end(JSON.stringify(data));
}

async function readBody(req) {
  const chunks=[];
  let length=0;
  for await (const chunk of req) {
    length+=chunk.length;
    if (length>8e6) throw new Error('저장 데이터가 너무 큽니다.');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

http.createServer(async (req,res)=>{
  try {
    const allowedHosts = [host+':'+port,'localhost:'+port];
    if (!allowedHosts.includes(req.headers.host)) return sendJSON(res,403,{ok:false,error:'로컬 주소로 접속하세요.'});
    const url = new URL(req.url,'http://'+host+':'+port);
    if (url.pathname==='/api/save' && req.method==='POST') {
      const allowedOrigins = allowedHosts.map(value=>'http://'+value);
      if (!allowedOrigins.includes(req.headers.origin) || !/^application\/json(?:;|$)/i.test(req.headers['content-type']||'')) {
        return sendJSON(res,403,{ok:false,error:'시퀀서 화면에서만 저장할 수 있습니다.'});
      }
      return sendJSON(res,200,{ok:true,...await store.save(await readBody(req))});
    }
    if (url.pathname==='/api/list' && req.method==='GET') {
      return sendJSON(res,200,{ok:true,performances:await store.list()});
    }
    if (url.pathname==='/api/load' && req.method==='GET') {
      const performanceId=(url.searchParams.get('performanceId')||'').trim();
      if (!performanceId) return sendJSON(res,400,{ok:false,error:'공연 ID를 입력하세요.'});
      return sendJSON(res,200,{ok:true,...await store.load(performanceId)});
    }
    if ((url.pathname==='/' || url.pathname==='/index.html') && req.method==='GET') {
      res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
      return res.end(fs.readFileSync(path.join(__dirname,'index.html')));
    }
    return sendJSON(res,404,{ok:false,error:'요청 경로가 없습니다.'});
  } catch (error) {
    return sendJSON(res,400,{ok:false,error:error.message});
  }
}).listen(port,host,()=>{
  console.log('공연 시퀀서: http://'+host+':'+port);
});
