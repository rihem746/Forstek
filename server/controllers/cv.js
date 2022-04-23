
import Cv from '../models/cv.js';

export const createCv = async (req,res) =>{
    const cv=req.file;
    const x={};

    console.log('cv   !! ',cv.path)
    
     
     const newCv = new Cv({...x, selectedFilefile: cv.path, creator: req.userId , date: new Date().toISOString()})
     

    try { 
         await newCv.save();

        res.status(201).json(newCv);

    } catch (error) {
        res.status(409).json({message: error.message});

    }
}