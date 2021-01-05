const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User=require('../models/UserModel');
const auth=require('../middleware/auth');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp')
const usernameGenerator=require('username-generator');
const UserModel = require('../models/UserModel');
const { check, validationResult } = require('express-validator');


const avatar = multer({
    limits:{
        fileSize:1000000,
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
        return cb(new Error('This is not a correct format of the file'))
        cb(undefined,true)
    }
})


//load user by token
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

/*
  Author:Sahil Naik
  Date:15/12/2020
  @desc Registration via email
  @router /users/signup
*/
router.post('/signup',
check('firstName','First Name is required').not().isEmpty(),
check('lastName','Last Name is required').not().isEmpty(),
check('email','please include a valid email').isEmail(),
check(`password`,`password is required`).exists(),
async(req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty())
    {
      return res.status(400).json({errors:errors.array()});
    }
 


  try {
    const {firstName,lastName,email,password}=req.body;
      if(password.length<5){

        return res
        .status(400)
        .json({ errors: [{ msg: `enter password of more than 5 characters` }] });

      }

      const existingUser=await User.findOne({email:email});

      if(existingUser){
      return   res
      .status(400)
      .json({ errors: [{ msg: ` user with this email already exists` }] });

      }
      const userName=usernameGenerator.generateUsername();
      
      // bcrypt Password with a String

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      // Values Stored in new User
      const newUser = new User({
        email,
        password:passwordHash,
        firstName,
        lastName,
        userName
        
       
    });
    // Values Stored to Database

    const savedUser=await newUser.save();
    res.json(savedUser);
  }
  catch (err) {
    console.error(err.message)
    return res.status(500).json({ errors: [{ msg: ` server error` }] });
  }

});//End of signup route


/*
  Author:Sahil Naik
  Date:15/11/2020
  @desc Router For signin
  @router users/signin
*/


router.post('/signin',
  check('email','please include a valid email').isEmail(),
  check(`password`,`password is required`).exists()
  ,async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
      return res.status(400).json({errors:errors.array()});
    }
  try {
      const {email,password}=req.body;

      const user=await User.findOne({email:email});

      if(!user){
        return res
        .status(400)
        .json({ errors: [{ msg: `no user exists` }] });

      }

      const isMatch=await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res
        .status(400)
        .json({ errors: [{ msg: `enter the correct password` }] });

      }
      const payload = {
        user: {
          id: user.id
        }
      };
      // It will produce the jwt secret token of the particular user

      const refreshTokens =jwt.sign(payload,process.env.JWT_SECRET);
      res.json({
      refreshTokens
       
      });

  }
    catch (err) {
      console.error(err.message);
    res.status(400).json({ errors: [{ msg: `server error` }] });
  }
});//End of route signin

/*
  Author:Sahil Naik
  Date:15/11/2020
  @desc Router To check user signedin or not to enter the homepage
  @router users/profile
*/

router.get("/profile", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    userName: user.userName,
    id: user._id,
    email:user.email,
    firstName:user.firstName,
    lastName:user.lastName,
    semester:user.semester,
    branch:user.branch,
    CreatedAt:user.CreatedAt,
  });
});//End of Router me




/*
  Author:Sahil Naik
  Date:15/11/2020
  @desc Router To Logout From the webapp
  @router users/signout
*/

// GET /logout
router.delete('/logout', async(req, res) => {
 refreshTokens = refreshTokens.filter(token => token !== req.body.token)

 res.json({
   Msg:"Logout Successfully"
 });
})

/*
  Author:Sahil Naik
  Date:16/11/2020
  @desc Router To Delete User Accout From the webapp
  @router users/deleteAccount
*/

router.delete('/deleteAccount',auth,async (req,res)=> {
  try {
    const deletedUser=await User.findByIdAndDelete(req.user);

    res.json(deletedUser);
  }   catch (err) {
    res.status(400).json({error:err.message});
  }
})//End of Route /deleteAccount


/*
  Author:Sahil Naik
  Date:16/11/2020
  @desc Router To Check Whether the TOken Produced is Valid or Not User Accout From the webapp
  @router users/deleteAccount
*/

router.post('/tokenIsValid',async(req,res)=>{
    try {
        const token =req.header('x-auth-token');
        if(!token){
          res.json(false);
        }
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        if(!verified){
          return res.status(400).json(false);
        }
        const user=await User.findById(verified.id);
        if(!user){
          return res.json(false);
        }
        return res.json(true);
    } catch (e) {
        res.status(500).json({error:err.message});
    }
});//End of ROute tokenIsValid


/*
  Author:Sahil Naik
  Date:16/11/2020
  @desc Router To Update User Profile
  @router users/updateUserProfile
*/
router.post('/', auth,async (req, res, next) => {


  const { name, github, twitter, facebook } = req.body;
  const _id = ObjectID(req.user._id);

  users.updateOne({ _id }, { $set: { firstname } }, (err) => {
    if (err) {
      throw err;
    }

    res.redirect('/users');
  });
});

router.post('/avatar',auth,avatar.single('avatar'),async (req,res) =>{
  const user = await User.findById(req.user);
   user.avatar =req.file.buffer
   await user.save();
   res.json({
     userName: user.userName,
     id: user._id,
     email:user.email,
     firstName:user.firstName,
     lastName:user.lastName,
     semester:user.semester,
     branch:user.branch,
     CreatedAt:user.CreatedAt,
     avatar:user.avatar
   });
},(err,req,res,next) => res.status(404).send({error:err}));

module.exports=router;
