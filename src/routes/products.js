import express from 'express';
import Models from '../db/models';
import jwtVerifier from '../middlewares/jwtVerifier';

const Product = Models.Product;

const router = express.Router();

router.get('/api/products', jwtVerifier, (req, res) => {
  Product.find()
    .then(products => res.json(products));
});

router.get('/api/products/:id', jwtVerifier, (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product));
});

router.post('/api/products', jwtVerifier, (req, res) => {
  Product.create({ ...req.body })
    .then(product => res.json(product));
});

router.delete('/api/products/:id', jwtVerifier, (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(product => res.json(product));
});


export default router;