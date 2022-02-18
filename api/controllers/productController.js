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

  getProducts: expressAsyncHandler(async (req, res) => {
    const kind = req.query.kind;
    console.log(kind);
    try {
      let products;

      if (kind === "new") {
        products = await Product.find({}).sort({ createdAt: "desc" }).limit(8);
      } else if (kind === "popular") {
        products = await Product.find({}).sort({ sold: -1 }).limit(8);
      }
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }),
};

module.exports = productController;
