import express from "express";
const capecController = require("../controllers/capec.controller");
const capecRouter = express.Router();
capecRouter.get("/cweId/:cweId", capecController.getCapecByCweId);
capecRouter.get("/:id", capecController.getCapecById);
export default capecRouter;
