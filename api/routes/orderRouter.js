const orderController = require("../controllers/orderController");
const {
  authMiddleware,
  verifyTokenAndAdmin,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware, orderController.register);
router.post("/", verifyTokenAndAdmin, orderController.getOrders);

module.exports = router;
