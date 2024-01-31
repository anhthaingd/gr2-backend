const { post } = require("../models");

const createPost = async ({ content, image, title, author }) => {
  try {
    const data = await post.create({
      content,
      image,
      title,
      author,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
const getAllPost = async (page) => {
  try {
    const data = await post.findAll();

    return data;
  } catch (error) {
    console.log(error);
  }
};
const getPostById = async (postId) => {
  try {
    const data = await post.findOne({
      where: { id: postId },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
const editPost = async (postId, postData) => {
  try {
    const existingPost = await post.findOne({
      where: { id: postId },
    });

    if (!existingPost) {
      return null;
    }

    // Update the post with the new data
    await existingPost.update(postData);
    return existingPost;
  } catch (error) {
    console.log(error);
  }
};
const deletePost = async (postId) => {
  try {
    const data = await post.findOne({
      where: { id: postId },
    });

    await data.destroy();
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createPost,
  getAllPost,
  getPostById,
  editPost,
  deletePost
};
