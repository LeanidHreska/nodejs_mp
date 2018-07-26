const dateUpdater = (req, res, next) => {
  if ((req.method === 'PUT') || (req.method === 'POST')) {
    req.body = { ...req.body, lastModifiedDate: Date.now() };
  }
  
  next();
};

export default dateUpdater;
