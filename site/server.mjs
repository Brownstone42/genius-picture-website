import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('dist/',import.meta.url)).replace(/[\\/]$/,'');
const port=Number(process.env.PORT||3000);
const server=http.createServer((req,res)=>{let url;try{url=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end();return}const file=path.resolve(root,'.'+(url==='/'?'/index.html':url));if(!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);res.end('Not found');return}res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','css':'text/css; charset=utf-8','js':'text/javascript; charset=utf-8'})[path.extname(file).slice(1)]||'application/octet-stream');res.end(data)})});
server.on('error',err=>{console.error(err.code==='EADDRINUSE'?`Port ${port} is already in use. Set PORT to another port.`:err.message);process.exit(1)});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://localhost:${port}`));
