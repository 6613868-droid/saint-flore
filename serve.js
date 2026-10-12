const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname);
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(root,p);
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404);res.end('not found');return;}
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end(d);
  });
}).listen(8814,()=>console.log('serving saint-flore on http://localhost:8814'));
