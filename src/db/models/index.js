import Sequelize from 'sequelize';
import sequelize from '../connect';
import defineProduct from './Product';
import defineUser from './User';

const Product = defineProduct(sequelize, Sequelize);
const User = defineUser(sequelize, Sequelize);

const Models = {
  Product,
  User,
};

export default Models;
