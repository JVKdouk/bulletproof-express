import express from 'express';
import { SENTRY_DSN } from '@/config';
import addSecurityMiddleware from './middlewares/security';
import compression from 'compression';
import appRoutes from './routes';
import cookieParser from 'cookie-parser';
import * as Sentry from '@sentry/node';
import passport from 'passport';
import './middlewares/auth';

const app = express();

// Add logging and tracing to the App.
Sentry.init({ dsn: SENTRY_DSN });
app.use(Sentry.Handlers.requestHandler());

addSecurityMiddleware(app);

app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(passport.initialize());

app.use(appRoutes);

export default app;