import express from 'express';
import Models from '../db/models';
import jwtVerifier from '../middlewares/jwtVerifier';

const User = Models.User;

const router = express.Router();

router.get('/api/users', jwtVerifier, (req, res) => {
  User.find()
    .then(users => res.json(users));
});

router.delete('/api/users/:id', jwtVerifier, (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => res.json(user));
});

export default router;