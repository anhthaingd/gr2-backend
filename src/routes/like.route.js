import express from "express";
const likeController = require("../controllers/like.controller");
const likeRouter = express.Router();
likeRouter.post("", likeController.createLike);
likeRouter.delete("/delete", likeController.deleteLike);
likeRouter.get("/postId/:postId", likeController.getLikeByPostId);
module.exports = likeRouter;
 