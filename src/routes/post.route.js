import express from "express";
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
postRouter.post("", postController.createPost);
postRouter.get("", postController.getAllPost);
module.exports = postRouter;
