const cartController = require("../controllers/cartController");
const {
  verifyTokenAndAuth,
  authMiddleware,
} = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/:id", verifyTokenAndAuth, cartController.register);
router.put("/:cartId", authMiddleware, cartController.update);

module.exports = router;
