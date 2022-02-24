const expressAsyncHandler = require("express-async-handler");
const Order = require("../models/Order");

const orderController = {
  // 주문 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const order = await Order.create({
        userId: req.user.id,
        ...req.body,
      });
      console.log("ASD");
      res.status(200).json(order);
    } catch (error) {
      throw new Error(error);
    }
  }),
};

module.exports = orderController;
