import express from 'express';
import data from '../fakeData/data';
import jwtVerifier from '../middlewares/jwtVerifier';


const router = express.Router();

router.get('/api/users', jwtVerifier, (req, res) => {
  res.json(data.users);
});


export default router;