import { JWT_SECRET_KEY } from '@/config';
import { Strategy } from 'passport-jwt';
import passport from 'passport';
import database from '@/database';
import GeneralError from '@/errors/GeneralError';
import { Request } from 'express';

const cookieExtractor = function (req: Request) {
  if (req && req.cookies) return req.cookies.jwt;
  else return null;
};

const params = {
  secretOrKey: JWT_SECRET_KEY,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(params, async function (payload, done) {
    const user = await database.user.findUnique({ where: { id: payload.sub } });

    if (!user) {
      return done(new GeneralError('Unauthorized', 401), false);
    }

    return done(null, user);
  })
);

export default passport;
