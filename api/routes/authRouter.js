const authController = require("../controllers/authController");
const { userExistHandler } = require("../middlewares/errorMiddleware");

const router = require("express").Router();

router.post("/register", userExistHandler, authController.register);

module.exports = router;
