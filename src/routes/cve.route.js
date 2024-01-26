import express from "express";
const cveController = require("../controllers/cve.controller");
const cveRouter = express.Router();
cveRouter.get("", cveController.getAllCve);
cveRouter.get("/limit", cveController.getAllCveLimitById);
cveRouter.get("/:cveId",cveController.getCveById)
export default cveRouter;