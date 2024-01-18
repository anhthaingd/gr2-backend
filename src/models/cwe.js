"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cwe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsToMany(models.Cve, {
      //   through: models.Cve_Cwe,
      //   foreignKey: "cweId",
      // });

    }
  }
  Cwe.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      extended_description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cwe",
    }
  );
  return Cwe;
};
