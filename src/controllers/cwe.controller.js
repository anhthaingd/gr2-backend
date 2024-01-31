const cweService = require("../services/cwe.service");

const getCweIdByCveId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cweService.getCweIdByCveId(req.params.cveId),
  });
};

const getCweById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cweService.getCweById(req.params.cweId),
  });
};

const getObservedByCweId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cweService.getObservedByCweId(req.params.cweId),
  });
};
const getMitigationByCweId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cweService.getMitigationByCweId(req.params.cweId),
  });
};
const getDetectMethodByCweId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cweService.getDetectMethodByCweId(req.params.cweId),
  });
};
const getCweByCapecId = async (req,res) => {
  
  return res.status(200).json({
    success: true,
    data: await cweService.getCweByCapecId(req.params.capecId),
  });
}
module.exports = {
  getCweIdByCveId,
  getCweById,
  getObservedByCweId,
  getMitigationByCweId,
  getDetectMethodByCweId,
  getCweByCapecId
};
