import express from "express";
const cweController = require("../controllers/cwe.controller");
const cweRouter = express.Router();
cweRouter.get("/cveId/:cveId", cweController.getCweIdByCveId);
cweRouter.get("/:cweId", cweController.getCweById);
cweRouter.get("/observed/:cweId", cweController.getObservedByCweId);
cweRouter.get("/mitigation/:cweId", cweController.getMitigationByCweId);
cweRouter.get("/detect/:cweId", cweController.getDetectMethodByCweId);
cweRouter.get("/capecId/:capecId", cweController.getCweByCapecId);
export default cweRouter;