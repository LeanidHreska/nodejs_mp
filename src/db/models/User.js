export default function defineUserModel(sequelize, types) {
  const User = sequelize.define('User', {
    firstName: {
      type: types.STRING,
      allowNull: false,
    },
    lastName: {
      type: types.STRING
    }
  });

  return User;
}
