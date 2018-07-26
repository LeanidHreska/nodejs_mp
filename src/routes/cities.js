import express from 'express';
import jwtVerifier from '../middlewares/jwtVerifier';
import Models from '../db/models';

const { City } = Models;

const router = express.Router();

router.get('/api/cities', jwtVerifier, (req, res) => {
  City.find()
    .then(cities => res.json(cities));
});

router.post('/api/cities', jwtVerifier, (req, res) => {
  City.create({ ...req.body })
    .then(city => res.json(city));
});

router.put('/api/cities/:id', jwtVerifier, (req, res) => {
  City.findByIdAndUpdate(req.params.id, req.body, { upsert: true, new: true, setDefaultsOnInsert: true })
    .then(city => res.json(city));
});

router.delete('/api/cities/:id', jwtVerifier, (req, res) => {
  City.findByIdAndRemove(req.params.id)
    .then(city => res.json(city));
});

router.get('/api/cities/random', jwtVerifier, (req, res) => {
  City.find()
    .then(cities => {
      const randomNumber = Math.floor(Math.random() * cities.length);
      res.json(cities[randomNumber]);
    });
});

export default router;
