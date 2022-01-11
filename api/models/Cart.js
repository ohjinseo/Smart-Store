const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  //제품들
  products: [
    {
      productId: {
        type: String,
      },
      amount: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
