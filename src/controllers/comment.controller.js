const commentService = require("./../services/comment.service");

const getComments = async (req, res) => {
  const postId = req.params.postId;
  return res.status(200).json({
    success: true,
    data: await commentService.getCommentsByPostID(postId),
  });
};

const createComment = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentService.createComment(req.body),
  });
};

const deleteComment = async (req, res) => {
  return res.status(200).json({
    success: true,
    comment: await commentService.deleteComment(req.params.commentId),
  });
}

module.exports = {
  getComments,
  createComment,
  deleteComment
};
