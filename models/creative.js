"use strict";
module.exports = function(sequelize, DataTypes) {
  var Creative = sequelize.define("Creative", {
    length: DataTypes.INTEGER,
    width: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    redirectURL: DataTypes.STRING,
    microUSD: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Creative.belongsTo(models.Buyer, {foreignKey:'buyerId'});
      }
    }
  });
  return Creative;
};
