const { handleHttpError } = require('../utils/handleErrors');

const timeMiddleware = async (req, res, next) => {
  try {
    const start = new Date();
    req.start = start;
    next()
  } catch (error) {
    handleHttpError(res, "something went worng. Try again");
  }
};

module.exports = timeMiddleware
