const cartController = require("../controllers/cartController");
const {
  verifyTokenAndAuth,
  authMiddleware,
} = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/", authMiddleware, cartController.register);
router.put("/:productId", authMiddleware, cartController.update);
router.get("/", authMiddleware, cartController.getCart);

module.exports = router;
