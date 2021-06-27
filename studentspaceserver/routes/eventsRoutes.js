const express=require('express');
const router=express.Router();
const auth = require('../middleware/auth');
const {check,validationResult} = require ('express-validator');
const Event=require('../models/EventModel');
const User=require('../models/UserModel');
const Duration=require('duration');

//adding events for a user
router.post('/',[auth,[
    check('text','text is required').not().isEmpty(),
    check('title','title is required').not().isEmpty(),
    check('expiry','expiry date is required').not().isEmpty()]
],async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
try {
    const user=await User.findById(req.user.id).select('-password');
    const newEvent=new Event({
        title:req.body.title,
        text:req.body.text,
        user:req.user.id,
        expiry:req.body.expiry
    })
    const event=await newEvent.save();
    res.json(event);

} catch (error) {
    console.error(error.message)
    res.status(500).send('server error');
}
});



//get all events active
router.get('/',auth, async(req,res)=>{
    try {
        const events=await Event.find().sort({date:-1})
        res.json(events);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
})

//delete event by id
router.delete('/:id',auth, async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);

  
      if (!event) {
        return res.status(404).json({ msg: 'Event not found' });
      }
  
      // Check user
      if (event.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await event.remove();
  
      res.json({ msg: 'Event removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });


  module.exports=router;