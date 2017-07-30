'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Cat.belongsTo(models.User);
      }
    }
  });
  return Cat;
};