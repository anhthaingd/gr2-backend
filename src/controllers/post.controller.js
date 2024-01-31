const postService = require("../services/post.service");

const createPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.createPost(req.body),
  });
};
const getAllPost = async (req, res) => {
  const { page } = req.query;
  return res.status(200).json({
    success: true,
    data: await postService.getAllPost(page),
  });
};
const getPostById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.getPostById(req.params.postId),
  });
};
const editPost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.editPost(req.params.postId, req.body),
  });
};
const deletePost = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await postService.deletePost(req.params.postId),
  });
};
module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
  deletePost,
};
