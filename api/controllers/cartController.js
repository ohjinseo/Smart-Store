const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");

const cartController = {
  // 사용자 전용 카트 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.create({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (error) {
      throw new Error(error);
    }
  }),

  // 카트에 물건 추가 및 삭제 [kind : all / add / delete]
  // 1. redux persist
  update: expressAsyncHandler(async (req, res) => {
    try {
      let cart;
      const userId = req.params.userId;
      const productId = req.body.productId;
      const kind = req.query.kind;
      let duplicate = false;
      let productObjId;

      cart = await Cart.findOne({ userId });

      !cart && res.status(500).json("사용자의 카트 정보를 찾을 수 없습니다.");

      if (cart.userId !== req.user.id) {
        res.status(500).json("사용자 카트가 아닙니다.");
      }
      const cartId = cart._id;

      //if문 도배 수정 시급..
      if (kind === "all") {
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
      } else {
        cart?.products.forEach((product) => {
          console.log("first");
          if (productId === product.productId.toString()) {
            productObjId = product.productId;
            duplicate = true;
          }
        });

        if (duplicate && kind === "add") {
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
        } else if (duplicate && kind === "delete") {
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

        if (!duplicate && kind === "add") {
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
        } else if (!duplicate && kind === "delete") {
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

  // 사용자 카트 가져오기
  getCart: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      !cart && res.status(500).json("사용자 카트를 찾을 수 없습니다");
      res.status(200).json(cart);
    } catch (error) {
      throw new Error(error);
    }
  }),
};

module.exports = cartController;
