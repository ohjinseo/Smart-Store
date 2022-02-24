const stripeController = require("../controllers/stripeController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware, stripeController.register);

module.exports = router;
