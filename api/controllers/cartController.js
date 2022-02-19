const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");

const cartController = {
  // 사용자 전용 카트 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.create({ userId: req.params.id });
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
      // findOne() 컬백 함수 비동기 문제 => 몽구스 메소드에 컬백을 전달해서는 안된다.

      cart = await Cart.findOne({ _id: cartId });

      !cart && res.status(500).json("카트 정보를 찾을 수 없습니다.");

      if (cart.userId !== req.user.id) {
        res.status(500).json("사용자 카트가 아닙니다.");
      }

      cart?.products.forEach((product) => {
        console.log("first");
        if (productId === product.productId.toString()) {
          productObjId = product.productId;
          duplicate = true;
        }
      });

      if (duplicate) {
        if (kind === "add") {
          cart = await Cart.findOneAndUpdate(
            {
              _id: cartId,
              "products.productId": productObjId,
            },
            {
              $inc: {
                "products.$.amount": 1,
              },
            },
            { new: true }
          );
        } else if (kind === "delete") {
          cart = await Cart.findOneAndUpdate(
            {
              _id: cartId,
              "products.productId": productObjId,
            },
            {
              $inc: {
                "products.$.amount": -1,
              },
            },
            { new: true }
          );
        }
      }

      if (!duplicate) {
        if (kind === "add") {
          console.log(cartId, productId);
          cart = await Cart.findByIdAndUpdate(
            cartId,
            {
              $push: {
                products: {
                  productId,
                },
              },
            },
            { new: true }
          );
        } else if (kind === "delete") {
          cart = await Cart.findByIdAndUpdate(
            cartId,
            {
              $pull: {
                products: {
                  productId,
                },
              },
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
