const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const AppError = require('./utils/AppError');
const errorHandler = require('./middlewares/errorHandler');
const configRouter = require('./routes/configRoutes');

const app = express();

// 1. GLOBAL MIDDLEWARES (Must be defined BEFORE any routes)
// Configure Helmet so it doesn't block cross-origin resources or inline scripts in dev
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false, // Disables CSP header during API development
  })
);

app.use(cors()); // Enable CORS for frontend requests
app.use(express.json({ limit: '10kb' })); // Body parser
app.use(morgan('dev')); // HTTP request logging

// 2. STATIC & UTILITY ROUTES
app.get('/favicon.ico', (req, res) => res.status(204).end());

// 3. API ROUTES
// Mount configRouter under /api/v1/page-config
app.use('/api/v1', configRouter);

// 4. CATCH-ALL UNHANDLED ROUTES (Must be AFTER all valid routes)
app.all('/*splat', (req, res, next) => {
  return next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// 5. GLOBAL ERROR HANDLER (Must be the VERY LAST middleware)
app.use(errorHandler);

module.exports = app;