import {
  AWS_SDK_KEY_ID,
  AWS_SDK_KEY_SECRET,
  AWS_SDK_S3_BUCKET_NAME,
} from '@/config';
import { v4 as uuidv4 } from 'uuid';
import mime from 'mime-types';
import path from 'path';
import AWS from 'aws-sdk';
import GeneralError from '@/errors/GeneralError';

// Security layer for user generated content
const allowedMimetypes = ['image/jpeg', 'image/png', 'image/bmp', 'image/webp'];

const S3 = new AWS.S3({
  accessKeyId: AWS_SDK_KEY_ID,
  secretAccessKey: AWS_SDK_KEY_SECRET,
});

export type FileProperties = {
  buffer: Buffer;
  mimetype: string;
};

export const S3imageUpload = (
  { buffer, mimetype }: FileProperties,
  bucketPath: string
) => {
  if (!AWS_SDK_S3_BUCKET_NAME) {
    throw new GeneralError('S3 Bucket is not configured correctly!');
  }

  if (allowedMimetypes.indexOf(mimetype) === -1) {
    throw new GeneralError(`Image mimetype ${mimetype} not supported`, 420);
  }

  // Extracting extension from mimetype ensures realibility
  const extension = mime.extension(mimetype);
  const filename = `${uuidv4()}.${extension}`;
  const filePath = path.join(bucketPath, filename);

  const params = {
    Bucket: AWS_SDK_S3_BUCKET_NAME,
    Key: filePath,
    Body: buffer,
    ContentType: mimetype,
  };

  return S3.upload(params).promise();
};
