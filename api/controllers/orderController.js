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

      res.status(200).json(order);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),

  // 모든 주문 가져오기
  getOrders: expressAsyncHandler(async (req, res) => {
    try {
      const orders = await Order.find({});
      res.status(200).json(orders);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),
};

module.exports = orderController;
