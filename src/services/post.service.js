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
const getAllPost = async () => {
    try {
      const data = await post.findAll();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
module.exports = {
  createPost,
  getAllPost
};
