const likeService = require("./../services/like.service");

const createLike = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeService.createLike(req.body),
  });
};
const deleteLike = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeService.deleteLike(req.body),
  });
};
const getLikeByPostId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await likeService.getLikeByPostId(req.params.postId),
  });
};
module.exports = {
  createLike,
  deleteLike,
  getLikeByPostId,
};
