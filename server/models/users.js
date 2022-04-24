import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
      name:{type: String , required : true} ,
      email:{ type: String , required: true},
      password:{type: String , required : true},
      entreprise:{
          type: String,
          default:''},
      location:{
          type: String,
          default: null },
      id:{ type: String},
     telephone: {type: String,
           default: null},
     adresse: {type: String,
        default: null},
    datedenaiss:{
        type: date
    },
    genre: {type: String}



})
export default mongoose.model("User",userSchema);