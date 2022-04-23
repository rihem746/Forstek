import express  from "express";
import bodyParser from 'body-parser';
import upload from "../middleware/upload.js";

import {createCv} from '../controllers/cv.js';

const router =express.Router();
const jsonParser = bodyParser.json();

router.post('/',jsonParser,createCv);





export default router;