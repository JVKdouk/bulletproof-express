import dotenv from 'dotenv';

// Makes environment variables accessible across server
dotenv.config();

export const PORT = process.env.API_PORT || 3333;
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const SENTRY_DSN = process.env.SENTRY_DSN || '';
export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || '';

// AWS SDK keys
export const AWS_SDK_KEY_ID = process.env.AWS_SDK_KEY_ID;
export const AWS_SDK_KEY_SECRET = process.env.AWS_SDK_KEY_SECRET;
export const AWS_SDK_S3_BUCKET_NAME = process.env.AWS_SDK_S3_BUCKET_NAME;

// JWT
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;