import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {
        const postMessages= await  PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
         res.status(404).json({message: error.message});
    }
    
}
export const getPost = async (req,res) => {
   const {id}= req.params;
    try {
        console.log("iiiii",req.params);
        const post= await  PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
         res.status(404).json({message: error.message});
    }
    
}
export const createPost = async (req,res) =>{
    const post=req.body;
    console.log(req.body);

     const x=post.post;

    //const newPost= new PostMessage(post.post);
     const newPost = new PostMessage({...x, creator: req.userId , date: new Date().toISOString()})
     console.log('new  ',newPost);

    try {
         await newPost.save();

        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message: error.message});

    }
}

export const getPostsBySearch = async (req,res)=> {
          const {searchQuery, tags}=req.query;
          

    try {
         const job=new RegExp(searchQuery,'i');
         const posts = await PostMessage.find({ $or: [{job} , {tags: { $in: tags.split(',') }}]});
         res.json({data: posts});
         console.log({data: posts});

    } catch (error) {
         res.status(404).json({message: error.message});
    }
}

export const updatePost = async (req,res) => {
    const {id : _id} = req.params;
    const post =req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});

    res.json(updatedPost);
    
}

export const deletePost = async(req,res)=> {
   const{id}= req.params;
   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id!');
   await PostMessage.findByIdAndRemove(id);
   
   res.json({message: 'Post deleted successfuly'});
   
}

export const likePost = async (req,res) => {
    const{id}= req.params;
    if(!req.userId) return res.json({meesage:'Unauthenticated'})

   if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id!');

   const post = await PostMessage.findById(id);
   
   const index= post.likes.findIndex((id)=> id===String(req.userId));
   if (index===-1){
       post.likes.push(req.userId);
   } else{
       post.likes = post.likes.filter((id)=> id !==String(req.userId));
   }

   const updatedPost= await PostMessage.findByIdAndUpdate(id, {likes: post.likes +1}, {new: true});

   res.json(updatedPost);
}