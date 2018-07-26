import Sequelize from 'sequelize';
import sequelize from '../connect';
import defineProduct from './Product';
import defineUser from './User';

import data from '../../fakeData/data';

const Product = defineProduct(sequelize, Sequelize);
const User = defineUser(sequelize, Sequelize);

Product.count().then(count => {
  (count === 0) && Product.bulkCreate(data.products);
});

const Models = {
  Product,
  User,
};

export default Models;
