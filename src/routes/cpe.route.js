import express from "express";
const cpeController = require("../controllers/cpe.controller");
const cpeRouter = express.Router();
cpeRouter.get("/cveId/:cveId", cpeController.getByCveId);
export default cpeRouter;