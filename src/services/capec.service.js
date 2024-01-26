const { cwe_capec, capec } = require("../models");

const getCapecByCweId = async (cweId) => {
  try {
    const data = await cwe_capec.findAll({
      where: { cweId: cweId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCapecById = async (id) => {
  try {
    const data = await capec.findAll({
      where: { id: id },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCapecByCweId,
  getCapecById,
};
