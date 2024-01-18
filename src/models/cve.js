"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cve extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsToMany(models.Cwe, {
      //   through: models.Cve_Cwe,
      //   foreignKey: "cveId",
      // });
    }
  }
  Cve.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      category: DataTypes.STRING,
      published_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      required_action: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cve",
    }
  );
  return Cve;
};
