const { like, post, User } = require("../models");

const createLike = async ({ userId, postId }) => {
  try {
    const Like = await like.create({
      userId,
      postId,
      status: true,
    });
    return Like;
  } catch (error) {
    console.error(error);
  }
};

const deleteLike = async ({ userId, postId }) => {
  try {
    const Like = await like.findOne({
      where: { userId: userId, postId: postId },
    });
    await Like.destroy();
    return Like;
  } catch (error) {
    console.error(error);
  }
};

const getLikeByPostId = async (postId) => {
  try {
    const Like = await like.findAll({
      where: { postId: postId },
    });
    return Like;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  createLike,
  deleteLike,
  getLikeByPostId,
};
