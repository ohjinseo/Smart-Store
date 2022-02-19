const User = require("../models/User");
const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Cart = require("../models/Cart");

const authController = {
  register: expressAsyncHandler(async (req, res) => {
    const { email } = req?.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409);
      throw new Error("이미 사용자가 존재합니다");
    }

    if (req.body.password !== req.body.checkPassword) {
      throw new Error("비밀번호가 일치하지 않습니다.");
    }

    const { checkPassword, ...reqUser } = req.body;

    try {
      const newCart = await Cart.create();
      console.log(newCart);
      reqUser.cart = newCart._id;

      const newUser = await User.create(reqUser);
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500);
      throw new Error(error?.message?.split(/:|,/)[2].trim()); //가장 최초의 오류를 던진다
    }
  }),

  login: expressAsyncHandler(async (req, res) => {
    const { email, password } = req?.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      throw new Error("사용자를 찾지 못하였습니다");
    }
    if (user.isPasswordMatch(password)) {
      const token = jwt.sign(
        {
          id: user._id,
          isSeller: user.isSeller,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "7d" }
      );

      const { password, ...others } = user._doc;
      res.status(200).json({ ...others, token });
    } else {
      res.status(403);
      throw new Error("비밀번호가 맞지 않습니다");
    }
  }),
};

module.exports = authController;
