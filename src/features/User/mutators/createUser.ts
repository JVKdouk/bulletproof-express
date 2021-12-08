import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';
import database from '@/database';

const bodySchema = z.object({
  password: z.string().min(6),
  name: z.string().min(10)
});

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = bodySchema.parse(req.body);
    const user = await database.user.create({ data: body });

    res.send(user);
  } catch (err) {
    next(err);
  }
};