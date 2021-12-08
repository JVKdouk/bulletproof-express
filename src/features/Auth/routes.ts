import { Router } from 'express';
import * as Mutator from './mutators';
import * as Queries from './queries';

const authRoutes = Router();

authRoutes.post('/register', Mutator.register);

authRoutes.post('/login', Queries.login);

export default authRoutes;