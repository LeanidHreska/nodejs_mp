// import  Sequelize from 'sequelize';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_mp', 'postgres', 'MyPass', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default sequelize;
