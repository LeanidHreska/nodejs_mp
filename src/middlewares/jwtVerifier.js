import jwt from 'jsonwebtoken';

import creds from '../../config/credentials.json';

const jwtVerifier = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(403).json({ success: false, message: 'Token is empty' });
  }

  jwt.verify(token, creds.local.secret, err => {
    if (err) {
      res.json({ success: false, message: 'Authorization error'});
    } else {
      next();
    }
  });
};

export default jwtVerifier;

