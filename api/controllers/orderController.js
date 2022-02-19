const expressAsyncHandler = require("express-async-handler");
const Order = require("../models/Order");

const orderController = {
  // 주문 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(200).json(order);
    } catch (error) {
      throw new Error(error);
    }
  }),
};

module.exports = orderController;
