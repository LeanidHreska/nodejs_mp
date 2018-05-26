const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/html');
  const file = fs.readFileSync('../data/index.html');
  res.end(file);
});

server.listen('8001', (err) => {
  if (err) throw err;
  console.log('server is listening on localhost:8001');
});
