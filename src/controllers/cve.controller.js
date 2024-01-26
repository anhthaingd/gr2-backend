const cveService = require("../services/cve.service");

const getAllCve = async (req, res) => {
  return res.status(200).json({
    success: true,
    cves: await cveService.getAllCve(),
  });
};
const getCveById = async (req, res) => {
  return res.status(200).json({
    success: true,
    cve: await cveService.getCveById(req.params.cveId),
  });
};
const getAllCveLimitById = async (req, res) => {
  const { page } = req.query;
  return res.status(200).json({
    success: true,
    cves: await cveService.getAllCveLimitById(page),
  });
};
module.exports = {
  getAllCve,
  getCveById,
  getAllCveLimitById,
};
