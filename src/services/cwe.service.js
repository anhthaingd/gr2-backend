const {
  Cve_Cwe,
  Cwe,
  observed_example,
  potential_mitigations,
  detection_method,
  cwe_capec
} = require("../models");

const getCweIdByCveId = async (cveId) => {
  try {
    const data = await Cve_Cwe.findAll({
      where: { cveId: cveId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getCweById = async (cweId) => {
  try {
    const data = await Cwe.findAll({
      where: { id: cweId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getObservedByCweId = async (cweId) => {
  try {
    const data = await observed_example.findAll({
      where: { cweId: cweId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getMitigationByCweId = async (cweId) => {
  try {
    const data = await potential_mitigations.findAll({
      where: { cweId: cweId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getDetectMethodByCweId = async (cweId) => {
  try {
    const data = await detection_method.findAll({
      where: { cweId: cweId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getCweByCapecId = async (capecId) => {
  try {
    const data = await cwe_capec.findAll({
      where: { capecId: capecId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getCweIdByCveId,
  getCweById,
  getObservedByCweId,
  getMitigationByCweId,
  getDetectMethodByCweId,
  getCweByCapecId
};
