"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class capec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  capec.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      extended_description: DataTypes.TEXT,
      likelihood_of_attack: DataTypes.STRING,
      typical_severity: DataTypes.STRING,
      mitigations: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "capec",
    }
  );
  return capec;
};
