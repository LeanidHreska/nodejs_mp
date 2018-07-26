import express from 'express';
import Models from '../db/models';
import data from '../fakeData/data';
import jwtVerifier from '../middlewares/jwtVerifier';

const Product = Models.Product;

const router = express.Router();

router.get('/api/products', jwtVerifier, (req, res) => {
  Product.findAll()
    .then(products => res.json(products));
});

router.get('/api/products/:id', jwtVerifier, (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product));
});

router.get('/api/products/:id/reviews', jwtVerifier, (req, res) => {
  const productReviews = data.reviews.filter(review => review.productId ===req.params.id);
  res.json(productReviews);
});

router.post('/api/products', jwtVerifier, (req, res) => {
  Product.create({
    ...req.body,
  }).then(product => res.json(product));
});

export default router;