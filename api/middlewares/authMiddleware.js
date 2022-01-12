const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (token && token.startsWith("Bearer")) {
    const originalToken = token.split(" ")[1];

    jwt.verify(originalToken, process.env.JWT_SEC, (error, user) => {
      if (error) {
        res.status(403);
        throw new Error("토큰이 유효하지 않습니다");
      }

      req.user = user;

      next();
    });
  } else {
    res.status(401);
    throw new Error("인증된 사용자가 아닙니다");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403);
      throw new Error("인증된 사용자가 아닙니다");
    }
  });
};

module.exports = { authMiddleware, verifyTokenAndAuth };
