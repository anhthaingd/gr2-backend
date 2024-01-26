import express from "express";
const cvssController = require("../controllers/cvss.controller");
const cvssRouter = express.Router();
cvssRouter.get("/cveId/:cveId", cvssController.getCvssByCveId);
export default cvssRouter;