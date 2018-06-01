import app from './app';
import data from './fakeData/data';

const port = process.env.PORT || 8070;
app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.filter(product => product.id === parseInt(req.params.id));
  product === [] ? res.send({}) : res.send(product[0]);
});


app.post('/api/products', (req, res) => {
  
});

app.get('/api/users', (req, res) => {
  res.send(data.users);
});
