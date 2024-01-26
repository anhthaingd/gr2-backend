const { cvss } = require("../models");

const getCvssByCveId = async (cveId) => {
  try {
    const data = await cvss.findAll({
      where: { cveId: cveId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCvssByCveId,
};
