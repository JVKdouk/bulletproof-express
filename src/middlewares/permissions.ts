import AdminError from '@/errors/AdminError';
import { NextFunction, Request, Response } from 'express';
import errorMiddleware from './errorHandler';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const admins: string[] = [];
  const isAdmin = admins.indexOf('a') > -1;

  if (isAdmin) next();
  else errorMiddleware(new AdminError(), req, res, next);
};