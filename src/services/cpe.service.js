const { cpe } = require("../models");

const getByCveId = async (cveId) => {
  try {
    const data = await cpe.findAll({
      where: { cveId: cveId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getByCveId,
};
