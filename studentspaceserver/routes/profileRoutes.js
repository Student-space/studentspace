const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const Profile=require('../models/ProfleModel');
const User=require('../models/UserModel');
const {check,validationResult}=require('express-validator');



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
router.post('/',[auth,[check('semester','semester is required').not().isEmpty(),
check('skills','skills is required').not().isEmpty()]],async(req,res)=>{

const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});


}

// destructure the request
const {
    bio,
    semester,
    skills,
    twitter,
    instagram,
    linkdin,
    facebook,
    
  } = req.body;

  const profileFeilds={};
  profileFeilds.user=req.user.id;
  if(bio)profileFeilds.bio=bio;
  if(semester)profileFeilds.semester=semester;
  if(skills){
      profileFeilds.skills=skills.split(',').map(skill=>skill.trim());
      console.log(profileFeilds.skills);
      
  }

profileFeilds.social={}

if(twitter)profileFeilds.social.twitter=twitter;
if(facebook)profileFeilds.social.facebook=facebook;
if(linkdin)profileFeilds.social.linkdin=linkdin;
if(instagram)profileFeilds.social.instagram=instagram;


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
module.exports = router;




