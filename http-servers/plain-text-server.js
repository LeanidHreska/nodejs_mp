const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.end('Hello World');
});

server.listen('8001', (err) => {
  if (err) throw err;
  console.log('server is listening on localhost:8001');
});
