import GeneralError from '@/errors/GeneralError';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';

// ESLint false-positive with Express.js method overloading.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (err: GeneralError, req: Request, res: Response, next: NextFunction) => {
  const message = err.message;
  const status = err.status || 500;

  console.error('\x1b[31m', err.stack);

  // <PrismaClientKnownRequestError>.message has sensitive information regarding the database
  // Strips prisma message from the response body
  if (err instanceof PrismaClientKnownRequestError) {
    return res
      .status(status)
      .send({ error: { code: err.code, meta: err.meta, status } });
  }

  // <PrismaClientValidationError>.message has sensitive information regarding the database
  // Strips prisma message from the response body
  if (err instanceof PrismaClientValidationError) {
    return res
      .status(status)
      .send({ error: { status, message: 'Internal Server Error' } });
  }

  return res
    .status(status)
    .send({ error: { message, status } });
};

export default errorMiddleware;
