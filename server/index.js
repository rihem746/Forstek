import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


import dotenv from 'dotenv';


const app= express();
dotenv.config();
app.use(cors());
app.use('/posts',postRoutes);
app.use('/users',userRoutes);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



const PORT= process.env.PORT ||5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true , useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`)))
  .catch((error)=> console.log(error));

