const mongoose = require('mongoose');

// Model consist of user authentication information
const UserSchema=new mongoose.Schema({
  email:{
      type:String,
      required:true,
      unique:true
  },
  semester:{
    type:Number,
    validate : {
      validator : Number.isInteger,
      message   : '{VALUE} is not an integer value'
}
  },
  branch:{
      type:String,
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
    max :20,

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
module.exports=mongoose.model('User',UserSchema);
