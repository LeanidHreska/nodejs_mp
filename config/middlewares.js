import express from 'express';
import expressSession from 'express-session';
import passport from 'passport';

import creds from '../config/credentials.json';

import cookiesParser from '../src/middlewares/cookiesParser';
import queryParser from '../src/middlewares/queryParser';
import dateUpdater from '../src/middlewares/dateUpdater';

import localAuthStrategy from '../src/auth/localStrategy';
import facebookAuthStrategy from '../src/auth/facebookStrategy';
import twitterStrategy from '../src/auth/twitterStrategy';
import googleAuthStrategy from '../src/auth/googleOAuthStrategy';

const middlewares = app => {
  localAuthStrategy();
  facebookAuthStrategy();
  twitterStrategy();
  googleAuthStrategy();

  app.use(expressSession({
    name: 'server-session-cookie-id',
    secret: creds.session.secret,
    saveUninitialized: true,
    resave: true,
  }));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(cookiesParser);
  app.use(queryParser);
  app.use(dateUpdater);

};

export default middlewares;
