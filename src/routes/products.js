import express from 'express';
import data from '../fakeData/data';
import jwtVerifier from '../middlewares/jwtVerifier';

const router = express.Router();

router.get('/api/products', jwtVerifier, (req, res) => {
  console.log(req.parsedQuery);
  res.json(data.products);
});

router.get('/api/products/:id', jwtVerifier, (req, res) => {
  const product = data.products.filter(product => product.id === req.params.id);
  product === [] ? res.send({}) : res.json(product[0]);
});

router.get('/api/products/:id/reviews', jwtVerifier, (req, res) => {
  const productReviews = data.reviews.filter(review => review.productId ===req.params.id);
  res.json(productReviews);
});

router.post('/api/products', jwtVerifier, (req, res) => {
  data.products = [ ...data.products, req.body];
  res.json(req.body);
});

export default router;