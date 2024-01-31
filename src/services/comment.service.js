const { comment, post, User } = require("../models");

const getCommentsByPostID = async (postId) => {
  try {
    const comments = await comment.findAll({
      where: { postId: postId },

      include: [
        {
          model: post,
          as: "food",
        },
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    return comments;
  } catch (error) {
    console.log(error);
  }
};

const createComment = async ({
  userId,
  star,
  content,
  isTrueComment,
  postId,
}) => {
  try {
    const comments = await comment.create({
      userId,
      star,
      content,
      isTrueComment,
      postId,
    });
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
const deleteComment = async (commentId) => {
  try {
    const comments = await comment.findOne({ where: { id: commentId } });
    await comments.destroy();
    return comments;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};
module.exports = {
  getCommentsByPostID,
  createComment,
  deleteComment,
};
