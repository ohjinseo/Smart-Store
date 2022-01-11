const User = require("../models/User");

const userExistHandler = async (req, res, next) => {
  const { email } = req?.body;
  const user = await User.findOne({ email });
  if (user) {
    next(new Error("유저가 존재합니다"));
  } else next();
};

const errorHandler = (error, req, res, next) => {
  console.log(res.statusCode);
  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(errorStatusCode);
  res.json({
    message: error.message,
  });
};

module.exports = { userExistHandler, errorHandler };
