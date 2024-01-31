'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.post, {
        foreignKey: "postId",
        as: "food",
      });
      comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  comment.init({
    content: DataTypes.STRING,
    postId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    isTrueComment: DataTypes.BOOLEAN,
    star: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};