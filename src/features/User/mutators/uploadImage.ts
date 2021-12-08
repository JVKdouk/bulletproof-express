import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';
import database from '@/database';
import { S3imageUpload, FileProperties } from '@/utils/s3';

const fileSchema = z.object({
  buffer: z.any().refine((val) => Buffer.isBuffer(val), {
    message: 'Image provided is not a buffer',
  }),
  mimetype: z.string(),
});

const paramSchema = z.object({
  userId: z.string(),
});

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const file = fileSchema.parse(req.file) as FileProperties;
    const params = paramSchema.parse(req.params);

    const response = await S3imageUpload(file, 'profiles/');
    
    const user = await database.user.update({
      where: { id: params.userId },
      data: { image: response.Key },
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
};
