import express from 'express';
import config from './config/config.json';
// import models from './models';

import middlewares from './config/middlewares';

// import Importer from './modules/importer';
// import DirWatcher from './modules/dirwatcher';

// const { User, Product} = models;

// new User();
// new Product();

// const importer = new Importer();
// const watcher = new DirWatcher();

const app = express();

middlewares(app);

// importer.listen();
// watcher.watch('data', 5000);

console.log(config.name);

export default app;
