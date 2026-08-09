const app = require('./app');
const env = require('./config/env');

// Catch uncaught exceptions (e.g., synchronous errors not caught anywhere)
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  process.exit(1);
});

const PORT = env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${env.NODE_ENV} mode on port ${PORT} 🚀`);
});

// Handle unhandled promise rejections (e.g., failed DB connections)
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});