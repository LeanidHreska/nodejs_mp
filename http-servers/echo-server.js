const http = require('http');

const server = http.createServer((req, res) => {
  req.pipe(res);
});

server.listen('8001', (err) => {
  if (err) throw err;
  console.log('server is listening on localhost:8001');
});
