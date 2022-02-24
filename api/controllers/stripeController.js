const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// 토큰 ID, amount
const stripeController = {
  register: expressAsyncHandler(async (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },
      (err, stripeRes) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  }),
};

module.exports = stripeController;
