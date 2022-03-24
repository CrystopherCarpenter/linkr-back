import { Router } from 'express';
import {
    createPost,
    listPosts,
    listUserPosts,
} from '../controllers/postsController.js';
import validateSchemaMiddleware from '../middleware/validateSchemaMiddleware.js';
import postSchema from '../schemas/postSchema.js';
import { validateToken } from '../middleware/validateToken.js';

const postsRouter = Router();

postsRouter.post(
    '/posts',
    validateToken,
    validateSchemaMiddleware(postSchema),
    createPost
);
postsRouter.get('/posts', validateToken, listPosts);

postsRouter.get('/user/:id', validateToken, listUserPosts);

export default postsRouter;
