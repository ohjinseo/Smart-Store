const errorHandler = (error, req, res, next) => {
  const errorStatusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(errorStatusCode);
  res.json({
    message: error.message,
    error: error.stack,
  });
};

module.exports = { errorHandler };
