import express from 'express';
import bcrypt from 'bcrypt';
import Models from '../db/models';
import jwtVerifier from '../middlewares/jwtVerifier';

const User = Models.User;

const router = express.Router();

router.get('/api/users', jwtVerifier, (req, res) => {
  User.find()
    .then(users => res.json(users));
});

router.post('/api/users', jwtVerifier, (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({ ...req.body, password: hash })
      .then(user => res.json(user));
  });
});

router.delete('/api/users/:id', jwtVerifier, (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => res.json(user));
});

export default router;