// 本地开发预览服务器（零依赖）：npm run dev [-- --port 8123 --host 127.0.0.1]
const http = require('http');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function arg(name, def) {
  const i = args.indexOf('--' + name);
  return i >= 0 && args[i + 1] ? args[i + 1] : def;
}
const port = parseInt(arg('port', process.env.PORT || '7100'), 10);
const host = arg('host', process.env.HOST || '127.0.0.1');
const root = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.pdb': 'text/plain', '.cif': 'text/plain',
  '.mmcif': 'text/plain', '.ent': 'text/plain', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.md': 'text/markdown; charset=utf-8', '.csv': 'text/csv; charset=utf-8'
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  const file = path.normalize(path.join(root, urlPath));
  if (!file.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, host, () => console.log(`ProLigView dev server: http://${host}:${port}/`));
