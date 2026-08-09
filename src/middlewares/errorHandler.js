
const env = require('../config/env');

// src/middlewares/errorHandler.js

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // 1. If headers are already sent, delegate to default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  // 2. Send structured JSON response
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;