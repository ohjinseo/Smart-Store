const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/Product");

const productController = {
  // 상품추가
  register: expressAsyncHandler(async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }),

  // 상품 인기순 / 최신순 8개 / 최신순, 카테고리 전체 가져오기
  getProducts: expressAsyncHandler(async (req, res) => {
    const kind = req.query.kind; //new or popular
    const category = req.query.category;
    try {
      let products;

      if (kind === "new") {
        products = await Product.find({}).sort({ createdAt: "desc" }).limit(8);
      } else if (kind === "popular") {
        products = await Product.find({}).sort({ sold: -1 }).limit(8);
      } else if (category) {
        products = await Product.find({
          categories: {
            $in: [category],
          },
        });
      } else {
        products = await Product.find({}).sort({ createdAt: "desc" });
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),

  // 상품 삭제
  delete: expressAsyncHandler(async (req, res) => {
    try {
      const deletePost = await Product.findById(req.params.id);
      await deletePost.delete();
      res.status(200).json("상품이 삭제되었습니다");
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),

  // 상품ID로 상품 가져오기
  getProduct: expressAsyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.productId);
      !product && res.status(404).json("상품을 찾을 수 없습니다");
      res.status(200).json(product);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),
};

module.exports = productController;
