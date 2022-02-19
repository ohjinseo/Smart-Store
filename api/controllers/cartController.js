const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");

const cartController = {
  // 사용자 전용 카트 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.create({
        userId: req.params.id,
      });
      res.status(200).json(cart);
    } catch (error) {
      throw new Error(error);
    }
  }),

  // 카트에 물건 추가 및 삭제
  update: expressAsyncHandler(async (req, res) => {
    try {
      let cart;
      const cartId = req.params.cartId;
      const productId = req.body.productId;
      const kind = req.query.kind;
      let duplicate = false;
      let productObjId;

      // Query was already executed => 몽구스는 동일한 쿼리 인스턴스 2번 실행안됨 => clone()으로 인스턴스 복제
      // findOne() 컬백 함수 비동기 문제 => findOne()의 결과값을 return하며, 컬백함수는 비동기 적용안됨 => 함수에 promise 구문 적용

      cart = await Cart.findOne({ _id: cartId }, async (err, cart) => {
        await cart.products.forEach((product) => {
          if (productId === product.productId.toString()) {
            productObjId = product.productId;
            duplicate = true;
          }
        });
      })
        .clone()
        .then(() => {});

      if (!duplicate) {
        console.log("second");
        if (kind === "add") {
          cart = await Cart.findByIdAndUpdate(
            cartId,
            {
              $push: { products: { productId } },
            },
            { new: true }
          );
        }
        if (kind === "delete") {
          cart = await Cart.findByIdAndUpdate(
            cartId,
            {
              $pull: { products: { productId } },
            },
            { new: true }
          );
        }
      }

      res.status(200).json(cart);
    } catch (error) {
      throw new Error(error);
    }
  }),
};

module.exports = cartController;
