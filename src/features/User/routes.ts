import { Router } from 'express';
import * as Queries from './queries';
import * as Mutator from './mutators';
import multer from 'multer';

const userRoutes = Router();
const upload = multer();

userRoutes.get('/', Queries.getUsers);

userRoutes.post('/', Mutator.createUser);

userRoutes.post('/:userId/image', upload.single('image'), Mutator.uploadImage);

export default userRoutes;