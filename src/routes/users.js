import express from 'express';
import Models from '../db/models';
import jwtVerifier from '../middlewares/jwtVerifier';

const User = Models.User;

const router = express.Router();

router.get('/api/users', jwtVerifier, (req, res) => {
  User.findAll()
    .then(users => res.json(users));
});


export default router;