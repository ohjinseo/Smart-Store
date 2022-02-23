const stripeController = require("../controllers/stripeController");

const router = require("express").Router();

router.post("/payment", stripeController.register);

module.exports = router;
