const http = require('http');

const product = {
  id: 1,
  name: 'Supreme T-Shirt',
  brand: 'Supreme',
  price: 99.99,
  options: [
    { color: 'blue' },
    { size: 'XL' }
  ]
};

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(product));
});

server.listen('8001', (err) => {
  if (err) throw err;
  console.log('server is listening on localhost:8001');
});
