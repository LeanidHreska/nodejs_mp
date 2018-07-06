import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import Models from '../db/models';
import creds from '../../config/credentials.json';

const router = express.Router();

const { User } = Models;

router.post('/auth',
  passport.authenticate('local'),
  (req, res) => {
    const { login, password } = req.body;
    const user = User.findOne({ login, password });
    
    if (user) {
      const token = jwt.sign({ login, password }, creds.local.secret, { expiresIn: 60 * 60 });
      res.send(token);
    } else {
      res.json({
        code: 404,
        message: 'User not Found',
      });
    }
  });



router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/callback/facebook',
  passport.authenticate('facebook'),
  (req, res) => {
    console.log(`Hi, ${req.user.displayName}`);
    res.redirect('/');
  });


router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/callback/twitter',
  passport.authenticate('twitter'),
  (req, res) => {
    console.log(`Hi, ${req.user.displayName}`);
    res.redirect('/');
  });


router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

router.get('/auth/callback/google',
  passport.authenticate('google'),
  (req, res) => {
    console.log(`Hi, ${req.user.displayName}`);
    res.redirect('/');
  });

export default router;
