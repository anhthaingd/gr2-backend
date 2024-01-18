'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cve_Cwe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cve_Cwe.init({
    cweId: DataTypes.STRING,
    cveId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cve_Cwe',
  });
  return Cve_Cwe;
};