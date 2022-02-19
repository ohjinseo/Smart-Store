const orderController = require("../controllers/orderController");
const { verifyTokenAndAuth } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/:userId", verifyTokenAndAuth, orderController.register);

module.exports = router;
