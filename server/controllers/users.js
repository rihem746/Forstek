import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import mongoose from 'mongoose';



export const signin = async( req , res)=>{
     const {email , password } = req.body;
     
     try {
        const exisitngUser= await User.findOne({email});
        
        if (!exisitngUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password,exisitngUser.password);
        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token= jwt.sign({email: exisitngUser.email, id: exisitngUser._id}, 'test' , { expiresIn: "1h"});
        res.status(200).json({result: exisitngUser , token});

     } catch (error) {
         res.status(500).json({message: 'something went wrong.'});
     }
}


export const signup = async( req , res)=>{

       const {email,password,confirmPassword, firstName, lastName, entreprise,location}=req.body;
       try {
         const exisitngUser= await User.findOne({email});
        
         if (exisitngUser) return res.status(400).json({message: "User already exists."});
         if (password !=confirmPassword) return res.status(400).json({message:"Passwords don't match"});

         const hashedPassword= await bcrypt.hash(password,12);

         const result = await User.create({email , password: hashedPassword, name: `${firstName} ${lastName}`, entreprise , location});

         const token= jwt.sign({email: result.email, id: result._id}, 'test' , { expiresIn: "1h"});

        res.status(200).json({result , token});

           
       } catch (error) {
        res.status(500).json({message: 'something went wrong.'});
       }
}
export const updateUser = async (req,res) => {
  const {id : _id} = req.params;
  const user =req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with that id');

  const {data}=await User.findByIdAndUpdate(_id, {...user ,_id},{new:true});
  

  res.json(user);
  
}

