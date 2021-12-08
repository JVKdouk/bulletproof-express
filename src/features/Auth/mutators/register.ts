import database from '@/database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import InvalidEnvError from '@/errors/InvalidEnvError';
import { generateCookie } from '@/utils/cookie';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { JWT_SECRET_KEY } from '@/config';

const bodySchema = z.object({
  name: z.string().min(6),
  password: z.string().transform(async (val) => await bcrypt.hash(val, 10)) // Hashing Function
});

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!JWT_SECRET_KEY) throw new InvalidEnvError();

    const body = await bodySchema.parseAsync(req.body);
    const user = await database.user.create({ data: body });
    const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY);
    
    const cookie = generateCookie('jwt', token);
    res.cookie(...cookie).send();
  } catch(err) {
    next(err);
  }
};