const orderController = require("../controllers/orderController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware, orderController.register);

module.exports = router;
