const capecService = require("../services/capec.service");

const getCapecByCweId = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await capecService.getCapecByCweId(req.params.cweId),
  });
};
const getCapecById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await capecService.getCapecById(req.params.id),
  });
};
module.exports = {
  getCapecByCweId,
  getCapecById,
};
