const productController = require("../controllers/productController");
const {
  verifyTokenAndSeller,
  verifyTokenAndAdmin,
} = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, productController.register);
router.get("/", productController.getProducts);
router.delete("/:id", verifyTokenAndAdmin, productController.delete);

module.exports = router;
