'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class potential_mitigations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  potential_mitigations.init({
    cweId: DataTypes.STRING,
    subheading: DataTypes.STRING,
    des: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'potential_mitigations',
  });
  return potential_mitigations;
};