const cartController = require("../controllers/cartController");
const {
  verifyTokenAndAuth,
  authMiddleware,
} = require("../middlewares/authMiddleware");
const router = require("express").Router();

router.post("/:userId", verifyTokenAndAuth, cartController.register);
router.put("/:userId", verifyTokenAndAuth, cartController.update);
router.get("/:userId", verifyTokenAndAuth, cartController.getCart);

module.exports = router;
