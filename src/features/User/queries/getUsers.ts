import database from '@/database';
import { NextFunction, Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await database.user.findMany();
    res.send(users);
  } catch(err) {
    next(err);
  }
};