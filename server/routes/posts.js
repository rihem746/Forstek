import express from 'express';
import bodyParser from 'body-parser';
import auth from '../middleware/auth.js';

import  {getPostsBySearch, getPosts, createPost, updatePost , deletePost, likePost} from '../controllers/posts.js';

const router =express.Router();
const jsonParser = bodyParser.json();

router.get('/',getPosts);
router.get('/search',getPostsBySearch);
router.post('/',jsonParser,auth,createPost);
router.patch('/:id',jsonParser,auth,updatePost);
router.delete ('/:id', jsonParser,auth,deletePost);
router.patch('/:id/likePost',jsonParser,auth,likePost);

   

export default router;