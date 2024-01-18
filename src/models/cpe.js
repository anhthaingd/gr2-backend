'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cpe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cpe.init({
    version: DataTypes.STRING,
    detail: DataTypes.STRING,
    cveId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cpe',
  });
  return cpe;
};