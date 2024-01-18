'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cwe_capec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cwe_capec.init({
    cweId: DataTypes.STRING,
    capecId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cwe_capec',
  });
  return cwe_capec;
};