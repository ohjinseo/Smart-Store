const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

const userController = {
  //비밀번호 수정
  updatePassword: expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user.isPasswordMatch(req.body.oldPassword)) {
      res.status(403);
      throw new Error("현재 비밀번호가 맞지 않습니다");
    }

    if (req.body.newPassword !== req.body.checkedPassword) {
      res.status(403);
      throw new Error("새 비밀번호와 동일하지 않습니다");
    }

    const hashedPassword = (req.body.checkedPassword = CryptoJS.AES.encrypt(
      req.body.checkedPassword,
      process.env.PASSWORD_SECRET_KEY
    ).toString());

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            password: hashedPassword,
          },
        },
        { new: true }
      );

      const { password, ...others } = updatedUser._doc;
      res.status(200).json({ ...others });
    } catch (error) {
      res.status(500).json(error);
    }
  }),

  //프로필 수정
  updateProfile: expressAsyncHandler(async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }),
};

module.exports = userController;
