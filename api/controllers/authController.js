const User = require("../models/User");

const authController = {
  register: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  login: async (req, res) => {},
};

module.exports = authController;
