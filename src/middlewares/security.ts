import hpp from 'hpp';
import helmet from 'helmet';
import enforceHTTPS from 'express-enforces-ssl';
import { Application } from 'express';
import { NODE_ENV } from '@/config';

const securityMiddleware = (server: Application) => {
  // Disables Fingerprint Web Application Framework
  // https://owasp.org/www-project-secure-headers/
  server.disable('x-powered-by');

  // Protection against HTTP Parameter Polution
  server.use(hpp());

  // HTTP Strict Transport Security (Requires HTTPS)
  // https://owasp.org/www-project-secure-headers/
  if (NODE_ENV === 'production') {
    server.use(helmet.hsts({
      maxAge: 31_536_000,
      includeSubDomains: true,
      preload: true
    }));

    server.use(enforceHTTPS());
  }

  // Prevent Reflected XSS Attacks (Cross-Site Scripting)
  // https://owasp.org/www-community/attacks/xss/
  server.use(helmet.xssFilter());

  // Prevent XSS Attacks (Cross-Site Scripting)
  // https://owasp.org/www-community/attacks/xss/ 
  server.use(helmet.frameguard({ action: 'deny' }));

  // Disables X-Download-Options (Internet Explorer )
  // https://owasp.org/www-project-secure-headers/
  server.use(helmet.ieNoOpen());

  // Sets X-Content-Type-Options to nosniff
  // https://owasp.org/www-project-secure-headers/
  server.use(helmet.noSniff());
};

export default securityMiddleware;