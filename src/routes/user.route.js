import express from "express";
const userController = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.get("/:userId", userController.getUserById);
module.exports = userRouter;
