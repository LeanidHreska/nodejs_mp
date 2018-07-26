import passport from 'passport';
import { Strategy } from 'passport-local';

import Models from '../db/models';

const { User } = Models;

const passportLocal = () => {
  passport.use(new Strategy({
    usernameField: 'login',
    passwordField: 'password',
    session: false
  }, (login, password, done) => {

    User.findOne({ login, password }).then(user => {
      user !== undefined
        ? done(null, user)
        : done(null, false, { message: 'User not found or password incorrect'});
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

export default passportLocal;
