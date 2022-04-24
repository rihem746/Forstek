import express  from "express";
import bodyParser from 'body-parser';


import {signin , signup ,updateUser } from '../controllers/users.js';


const router =express.Router();
const jsonParser = bodyParser.json();



router.post('/signin',jsonParser, signin);
router.post('/signup',jsonParser, signup);
router.patch('/:id',jsonParser,updateUser);





export default router;