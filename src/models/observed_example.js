'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class observed_example extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cwe, {
        foreignKey: "cweId",
        as: "cwe",
      });
    }
  }
  observed_example.init({
    link: DataTypes.STRING,
    name: DataTypes.STRING,
    des: DataTypes.STRING,
    cweId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'observed_example',
  });
  return observed_example;
};