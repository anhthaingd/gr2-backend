const postService = require("../services/post.service");

const createPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.createPost(req.body),
  });
};
const getAllPost = async (req, res) => {
    return res.status(200).json({
      success: true,
      data: await postService.getAllPost(),
    });
  };
module.exports = {
  createPost,
  getAllPost
};
