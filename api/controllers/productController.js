const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const productController = {
  //상품추가
  register: expressAsyncHandler(async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }),
};

module.exports = productController;
