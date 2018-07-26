import Sequelize from 'sequelize';
import sequelize from '../connect';
import defineProduct from './ProductSQL';
import defineUser from './UserSQL';

import City from './City';
import Product from './Product';
import User from './User';

const ProductSQL = defineProduct(sequelize, Sequelize);
const UserSQL = defineUser(sequelize, Sequelize);


const Models = {
  ProductSQL,
  UserSQL,
  City,
  Product,
  User
};

export default Models;
