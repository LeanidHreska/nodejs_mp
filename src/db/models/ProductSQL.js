export default function defineProductModel(sequelize, types) {
  const Product = sequelize.define('Product', {
    title: {
      type: types.STRING,
      allowNull: false,
    },
    color: {
      type: types.STRING
    }
  });

  return Product;
}
