const productController = require("../controllers/productController");
const {
  verifyTokenAndSeller,
  verifyTokenAndAdmin,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/register", verifyTokenAndAdmin, productController.register);
router.get("/", productController.getProducts);

module.exports = router;
