const User = require("../models/User");
const expressAsyncHandler = require("express-async-handler");

const authController = {
  register: expressAsyncHandler(async (req, res) => {
    const { email } = req?.body;
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("유저가 존재합니다");
    }

    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }),

  login: async (req, res, next) => {
    const { email } = req?.body;
    const user = await User.findOne({ email });
    if (user) {
      next(new Error("유저가 존재합니다"));
    }

    try {
    } catch (error) {}
  },
};

module.exports = authController;
