import express  from "express";
import upload from "../middleware/upload.js";

import {createCv} from '../controllers/cv.js';

const router =express.Router();

router.post('/',upload.single('cv'), createCv);





export default router;