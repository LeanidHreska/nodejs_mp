import express from 'express';
import data from '../fakeData/data';

const router = express.Router();

router.get('/api/products', (req, res) => {
  console.log(req.parsedQuery);
  res.json(data.products);
});

router.get('/api/products/:id', (req, res) => {
  const product = data.products.filter(product => product.id === req.params.id);
  product === [] ? res.send({}) : res.json(product[0]);
});

router.get('/api/products/:id/reviews', (req, res) => {
  const productReviews = data.reviews.filter(review => review.productId ===req.params.id);
  res.json(productReviews);
});

router.post('/api/products', (req, res) => {
  data.products = [ ...data.products, req.body];
  res.json(req.body);
});

export default router;