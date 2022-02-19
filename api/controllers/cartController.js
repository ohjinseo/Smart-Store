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

      cart = Cart.findOne({ _id: cartId }, (err, cart) => {
        cart.products.forEach((product) => {
          if (product.productId === productId) {
            product.amount += 1;
            duplicate = true;
          }
        });
      });

      Cart.findOne({ _id: cartId })
        .populate({
          path: "products.productId",
          model: "Product",
        })
        .exec((err, data) => console.log("%j", data));

      if (!duplicate) {
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
