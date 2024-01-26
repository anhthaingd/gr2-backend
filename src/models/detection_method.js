"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class detection_method extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detection_method.init(
    {
      cweId: DataTypes.STRING,
      subheading: DataTypes.TEXT,
      des: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "detection_method",
    }
  );
  return detection_method;
};
