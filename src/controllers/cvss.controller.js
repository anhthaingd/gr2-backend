const cvssService = require("../services/cvss.service");

const getCvssByCveId = async (req, res) => {
  return res.status(200).json({
    success: true,
    cvss: await cvssService.getCvssByCveId(req.params.cveId),
  });
};


module.exports = {
  getCvssByCveId,
};
