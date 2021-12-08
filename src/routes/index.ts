import { userRoutes } from '@/features/User';
import { authRoutes } from '@/features/Auth';
import errorMiddleware from '@/middlewares/errorHandler';
import requestLoggingMiddleware from '@/middlewares/requestLogging';
import * as Sentry from '@sentry/node';
import { Router } from 'express';

const appRoutes = Router();

// Log every request path and method before it is routed
appRoutes.use(requestLoggingMiddleware);

// Add feature routes
appRoutes.use('/auth', authRoutes);
appRoutes.use('/users', userRoutes);

// Sends errors to Sentry
appRoutes.use(Sentry.Handlers.errorHandler());

// Handle errors throughout routes
appRoutes.use(errorMiddleware);

export default appRoutes;

