const productController = require("../controllers/productController");
const { verifyTokenAndSeller } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", verifyTokenAndSeller, productController.register);

module.exports = router;
