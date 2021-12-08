import { Application } from 'express';
import passport from 'passport';
import './jwt';

export const addAuthMiddleware = (server: Application) => {
  server.use(passport.initialize());
};

export const authRequired = passport.authenticate('jwt', { session: false });