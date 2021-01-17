const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');
const Profile=require('../../models/ProfileModel');
const User=require('../../models/UserModel');
const {check,validationResult}=require('express-validator');
const config=require('config');
const request=require('request');


//GET CURRENT USERS PROFILE
router.get('/me',auth,async(req,res)=>{
    try {
        const profile=await Profile.findOne({user: req.user.id}).populate('user',['name','avatar']);
          if(!profile){
              return res.status(400).json({msg:'there is no profile for this user'});
          }
          res.json(profile)
  
  
  
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server erorr');
    }
  
  });


  //create or update profile
router.post('/',[auth,[check('status','status is required').not().isEmpty(),
check('skills','skills is required').not().isEmpty()]],async(req,res)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});


}

// destructure the request
const {
    website,
    location,
    bio,
    semester,
    skills,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook,
    
  } = req.body;

  const profileFeilds={};
  profileFeilds.user=req.user.id;
  if(website)profileFeilds.website=website;
  if(location)profileFeilds.location=location;
  if(bio)profileFeilds.bio=bio;
  if(semester)profileFeilds.semester=semester;
  if(skills){
      profileFeilds.skills=skills.split(',').map(skill=>skill.trim());
      console.log(profileFeilds.skills);
      
  }

profileFeilds.social={}
if(youtube)profileFeilds.social.youtube=youtube;
if(twitter)profileFeilds.social.twitter=twitter;
if(facebook)profileFeilds.social.facebook=facebook;
if(linkedin)profileFeilds.social.linkedin=linkedin;
if(instagram)profileFeilds.social.linkedin=linkedin;


try {
    
    let profile=await Profile.findOne({user:req.user.id});
    if(profile)
    {
        profile=await Profile.findOneAndUpdate(
            {user:req.user.id},
            {$set:profileFeilds},
            {new:true}
        );

        return res.json(profile);
    }

    profile=new Profile(profileFeilds);
    await profile.save();
    res.json(profile);


} catch (error) {
    console.error(error.message);
    res.status(400).send('server error');
}

});



//get profile by id
router.get('/user/:user_id',async(req,res)=>{

    try {
        const profile=await Profile.findOne({user:req.params.user_id}).populate('user',['name','avatar']);
        if(!profile) return res.status(400).json({msg:'there is no profile'});

        
        res.json(profile);

    } catch (error) {
        console.error(error.message);
        if(error.kind=='ObjectId')
        {
            return res.status(400).json({msg:'there is no profile'});
        }
        res.status(500).send('server error');
        
    }

});



//delete user and profile
router.delete('/',auth,async(req,res)=>{

    try {

        //removie profile
        await Profile.findOneAndRemove({user:req.user.id});

        //remove user
        await User.findOneAndRemove({_id:req.user.id});
        res.json({msg:'user removed'});

    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
        
    }

});





