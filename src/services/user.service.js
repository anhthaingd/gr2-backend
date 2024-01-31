const { User } = require("../models");

const getUserById = async (userId) => {
  try {
    const data = await User.findOne({
      where: { id: userId },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getUserById,
};
