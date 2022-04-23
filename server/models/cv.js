import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    creator: String,
    date:{
        type:Date,
        default: new Date()
    },
    selectedFilefile:{ type: String,
        default:'',
    }

})
export default mongoose.model("Cv",userSchema);