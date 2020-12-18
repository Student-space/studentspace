const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User=require('../models/UserModel');
const auth=require('../middleware/auth');
const jwt = require("jsonwebtoken");
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp')

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


/*
  Author:Sahil Naik
  Date:15/12/2020
  @desc Registration via email
  @router /users/signup
*/
router.post('/signup',async(req,res,next)=>{

  const {email,password,passwordCheck,firstName,lastName,userName,semester,branch,CreatedAt}=req.body;

  try {

      if(!email|| !password || !passwordCheck ||!firstName || !lastName || !semester || !branch){

        return res
        .status(400)
        .json({msg:"Please Fill all the fields"});

      }
      if(password.length<5){

        return res
        .status(400)
        .json({msg:"Please Enter Password of length More than 5"});

      }
      if(password!==passwordCheck){

        return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

      }

      if(!userName){
        userName=email;
      }

      const existingUser=await User.findOne({email:email});

      if(existingUser){
      return   res
      .status(400)
      .json({msg:"User With this email already exits"});

      }
      if(userName>40){
      return  res
      .status(400)
      .json({msg:"Please Enter Username of length below 40"});

      }
      // bcrypt Password with a String

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      // Values Stored in new User
      const newUser = new User({
        email,
        password:passwordHash,
        firstName,
        lastName,
        userName,
        semester,
        branch,
        CreatedAt
    });
    // Values Stored to Database

    const savedUser=await newUser.save();

    res.json(savedUser);

  }
  catch (err) {
    return res.status(500).json({error:err});
  }

});//End of signup route


/*
  Author:Sahil Naik
  Date:15/11/2020
  @desc Router For signin
  @router users/signin
*/


router.post('/signin', async (req,res)=>{
  try {
      const {email,password}=req.body;

      if(!email || !password){
        return res
        .status(400)
        .json({msg:"Please Fill all the fields"});

      }
      const user=await User.findOne({email:email});

      if(!user){
        return res
        .status(400)
        .json({msg:"No User Account Exists"});

      }

      const isMatch=await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res
        .status(400)
        .json({msg:"Please Enter the correct password"});

      }
      // It will produce the jwt secret token of the particular user

      const refreshTokens =jwt.sign({id:user._id},process.env.JWT_SECRET);
      res.json({
      refreshTokens,
        user:{
          id:user._id,
          userName:user.userName
        }
      });

  }
    catch (err) {
    res.status(400).json({error:err.message});
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
