const userController = require("../controllers/userController");
const { verifyTokenAndAuth } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.put(
  "/update/password/:id",
  verifyTokenAndAuth,
  userController.updatePassword
);

module.exports = router;
