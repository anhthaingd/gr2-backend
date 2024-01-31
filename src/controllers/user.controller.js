const userService = require("../services/user.service");

const getUserById = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: await userService.getUserById(req.params.userId),
  });
};
module.exports = {
  getUserById,
};
