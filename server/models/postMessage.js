import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    job:  String,
    name: String,
    creator: String,
    description:  String,
    tags:[String],
    categorie: String,
    type:  String,
    localisation: String, 
    
    date:{
        type:Date,
        default: new Date()
    },
    likes:{
        type: [String],
        default:[],

    },
});
//nesh nwali nzidha categories annd tags . 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;