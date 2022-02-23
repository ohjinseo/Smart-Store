const expressAsyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_KEY);

// 토큰 ID, amount
const stripeController = {
  register: expressAsyncHandler(async (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        currency: "usd",
      },
      (err, stripeRes) => {
        if (err) {
          res.status(500).json(err);
        } else {
          stripeRes.status(200).json(stripeRes);
        }
      }
    );
  }),
};

module.exports = stripeController;
