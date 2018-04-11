import config from './config/config.json';
import models from './models';

const { User, Product} = models;

new User();
new Product();

console.log(config.name);
