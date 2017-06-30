const errorHandler = (err, request, response, next) => {
  response.status(500).json({
    message: 'uh oh! something is broke!'
  });
};

module.exports = errorHandler;
