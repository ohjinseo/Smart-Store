const userController = require("../controllers/userController");
const { verifyTokenAndAuth } = require("../middlewares/authMiddleware");

const router = require("express").Router();

//비밀번호 수정
router.put(
  "/update/password/:id",
  verifyTokenAndAuth,
  userController.updatePassword
);

//프로필 수정
router.put(
  "/update/profile/:id",
  verifyTokenAndAuth,
  userController.updateProfile
);

module.exports = router;
