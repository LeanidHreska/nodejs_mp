import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import creds from '../../config/credentials.json';

const twitterStrategy = () => passport.use(new TwitterStrategy({
  consumerKey: creds.twitter.consumerKey,
  consumerSecret: creds.twitter.consumerSecret,
  callbackURL: `http://localhost:${process.env.PORT || 8070}/auth/callback/twitter`,
}, (token, tokenSecret, profile, done) => {
  done(null, profile);
})
);

export default twitterStrategy;