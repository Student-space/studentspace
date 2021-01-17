const mongoose = require('mongoose');

// Model consist of user authentication information
const UserSchema=new mongoose.Schema({
  email:{
      type:String,
      required:true,
      unique:true
  },

  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true

  },
  userName:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
    minlength:5
  },
  avatar:{
      type:Buffer
  },
  CreatedAt:{
   type:Date,
   default:Date.now
 }
}
);
module.exports=User= mongoose.model('user',UserSchema);
