import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    job:  String,
    entreprise : String,
    description:  String,
    type:  String,
    localisation: String, 
    date:{
        type:Date,
        default: new Date()
    },
    likes:{
        type: Number,
        default:0

    },
});
//nesh nwali nzidha categories annd tags . 
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;