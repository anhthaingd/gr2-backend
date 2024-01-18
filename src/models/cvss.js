"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cvss extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cvss.init(
    {
      base_score: DataTypes.STRING,
      base_severity: DataTypes.STRING,
      cvss_vector: DataTypes.STRING,
      exploitability_score: DataTypes.STRING,
      impact_score: DataTypes.STRING,
      source: DataTypes.STRING,
      cveId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "cvss",
    }
  );
  return cvss;
};
