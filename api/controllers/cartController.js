const expressAsyncHandler = require("express-async-handler");
const Cart = require("../models/Cart");

const cartController = {
  // 사용자 전용 카트 생성
  register: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.create({ userId: req.user.id });
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
      const userId = req.user.id;
      const productId = req.params.productId.trim();
      const kind = req.query.kind;
      const count = req.query.count;
      let duplicate = false;
      let productObjId;

      cart = await Cart.findOne({ userId });

      !cart && res.status(404).json("사용자의 카트 정보를 찾을 수 없습니다.");

      if (cart.userId !== req.user.id) {
        res.status(404).json("사용자 카트가 아닙니다.");
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
        // 상품이 존재하는지
      } else {
        cart?.products.forEach((product) => {
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
                "products.$.amount": count,
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
      res.status(500);
      throw new Error(error);
    }
  }),

  // 사용자 카트 가져오기
  getCart: expressAsyncHandler(async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.user.id }).populate({
        path: "products.productId",
        model: "Product",
      });

      console.log(cart);

      !cart && res.status(404).json("사용자 카트를 찾을 수 없습니다");
      res.status(200).json(cart);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  }),
};

module.exports = cartController;
