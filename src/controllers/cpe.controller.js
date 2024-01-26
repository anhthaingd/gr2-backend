const cpeService = require("../services/cpe.service");

const getByCveId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await cpeService.getByCveId(req.params.cveId),
  });
};

module.exports = {
  getByCveId,
};
