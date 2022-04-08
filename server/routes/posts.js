import express from 'express';
import bodyParser from 'body-parser';

import  {getPosts, createPost, updatePost , deletePost, likePost} from '../controllers/posts.js';

const router =express.Router();
const jsonParser = bodyParser.json();

router.get('/',getPosts);
router.post('/',jsonParser,createPost);
router.patch('/:id',jsonParser,updatePost);
router.delete ('/:id', jsonParser,deletePost);
router.patch('/:id/likePost',jsonParser,likePost);

   

export default router;