import { PORT } from './config';
import app from './app';
import Debug from 'debug';

const debug = Debug('express:api:dev');

const server = app.listen(PORT, () =>
  debug(`Server running on port ${PORT}...`)
);

process.on('SIGTERM', () => {
  if (server) server.close();
});

/**
 * Unhandled Rejections and Uncaught Exceptions are dangerous to the software
 * life-cycle. Brittle states may be left by non-handled exceptions and rejections.
 * If that happen, make sure your reverse proxy or process manager automatically
 * restarts your application.
 */
process.on('unhandledRejection', async err => {
  console.error('Unhandled rejection', err);
  process.exit(1);
});

process.on('uncaughtException', async err => {
  console.error('Uncaught exception', err);
  process.exit(1);
});