'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    role: DataTypes.ENUM(['user', 'admin', 'superadmin'])
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Cat);
      }
    }
  });
  return User;
};
