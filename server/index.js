import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import pdf from 'html-pdf';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import cvRoutes from './routes/cv.js';


import dotenv from 'dotenv';


const app= express();
dotenv.config();
app.use(cors());
app.use('/posts',postRoutes);
app.use('/users',userRoutes);
app.use('/cv', cvRoutes);
app.post('/uploads',express.static('uploads'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/create-pdf',(req,res)=>{
    pdf.create(pdfTemplate(req.body),{}).toFile('result.pdf',(err)=>{
       
      if (err) {
        return  res.send(Promise.reject());
      }
      return res.send(Promise.resolve());
    });
});

app.get('fetch-pdf', (req,res)=>{
  res.sendFile(`${__dirname}/result.pdf`)
});

const PORT= process.env.PORT || 5000;

const url = process.env.CONNECTION_URL;
mongoose.connect(url,{useNewUrlParser: true , useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=> console.log(`server running on port : ${PORT}`)))
  .catch((error)=> console.log(error));

