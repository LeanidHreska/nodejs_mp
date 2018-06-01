import app from './app';
import data from './fakeData/data';

const port = process.env.PORT || 8070;
app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.filter(product => product.id ===req.params.id);
  product === [] ? res.send({}) : res.send(product[0]);
});

app.get('/api/products/:id/reviews', (req, res) => {
  const productReviews = data.reviews.filter(review => review.productId ===req.params.id);
  res.send(productReviews);
});

app.post('/api/products', (req, res) => {
  data.products = [ ...data.products, req.body];
  res.send(req.body);
});

app.get('/api/users', (req, res) => {
  res.send(data.users);
});
