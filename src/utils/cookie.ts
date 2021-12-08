import { COOKIE_DOMAIN, NODE_ENV } from '@/config';
import { CookieOptions } from 'express';

export const generateCookie = (name: string, value: string) => {
  const params: CookieOptions = {
    httpOnly: true,
    secure: NODE_ENV === 'production' ? true : false,
    domain: COOKIE_DOMAIN,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    path: '/'
  };

  return [name, value, params] as [string, string, CookieOptions];
};