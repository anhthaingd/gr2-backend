import express from "express";
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
postRouter.post("", postController.createPost);
postRouter.get("", postController.getAllPost);
postRouter.get("/:postId", postController.getPostById);
postRouter.put("/:postId", postController.editPost);
postRouter.delete("/:postId", postController.deletePost);
module.exports = postRouter;
