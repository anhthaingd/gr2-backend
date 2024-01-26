const { Cve } = require("../models");

const getAllCve = async () => {
  try {
    const cves = await Cve.findAll();
    return cves;
  } catch (error) {
    console.log(error);
  }
};

const getCveById = async (cveId) => {
  try {
    const cve = await Cve.findOne({
      where: { id: cveId },
    });
    return cve;
  } catch (error) {
    console.log(error);
  }
};

const getAllCveLimitById = async (offset) => {
  try {
    const cve = await Cve.findAndCountAll({
      offset: (offset - 1) * 8 || 0,
      limit: 8,
    });
    return cve;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllCve,
  getCveById,
  getAllCveLimitById,
};
