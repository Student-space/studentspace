const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title:{
      type:String,
      required:true
  },
  text:{
      type:String,
      required:true
  },
  expiry:{
      type:String,
      required:true
  },
  date:{
    type:Date,
    default:Date.now}
});


module.exports=Event=mongoose.model('event',EventSchema);