import Debug from 'debug';
import { NextFunction, Request, Response } from 'express';

const debug = Debug('express:middlewares:logging');

const requestLoggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  debug(`${req.method} ${req.url}`);
  next();
};

export default requestLoggingMiddleware;