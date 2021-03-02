const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');
const {check,validationResult} = require ('express-validator');
const Post=require('../models/PostModel');
const User=require('../models/UserModel');


//add posts for a specific user
router.post('/',[auth,[
    check('text','text is required').not().isEmpty()]
],async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}

try {
    const user=await User.findById(req.user.id).select('-password');
    const newPost=new Post({
        text:req.body.text,
        name:user.name,
        user:req.user.id
    
    })
    const post=await newPost.save();
    res.json(post);

} catch (error) {
    console.error(error.message)
    res.status(500).send('server error');
}




});




//Get all post

router.get('/',auth, async(req,res)=>{
    try {
        const posts=await Post.find().sort({date:-1})
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server errpr');
    }
})



//get posts by id
router.get('/:id',auth, async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);


        if(!post)
        {
            return res.status(404).json({msg:'post not found'});
        }


        res.json(post);
    } catch (error) {
        console.error(error.message);
        if(error.kind=== 'ObjectId')
        {
            return res.status(404).json({msg:'post not found'});
        }
        res.status(500).send('server errpr');
    }
})



//delete post by id
router.delete('/:id',auth, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      //console.log(post);
  
      if (!post) {
        return res.status(404).json({ msg: 'Post not found' });
      }
  
      // Check user
      if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      await post.remove();
  
      res.json({ msg: 'Post removed' });
    } catch (err) {
      console.error(err.message);
  
      res.status(500).send('Server Error');
    }
  });



//like a post

router.put('/likes/:id',auth,async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);

        if(post.likes.filter(like=>like.user.toString()=== req.user.id).length>0)
        {
            return res.status(400).json({msg:'post already liked'});
        }
        post.likes.unshift({user: req.user.id});
        await post.save()
        res.json(post.likes);



    } catch (error) {
        
        console.error(error.message);
  
        res.status(500).send('Server Error');

    }
})




//remove a like
router.put('/unlike/:id',auth,async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);

        if(post.likes.filter(like=>like.user.toString()=== req.user.id).length===0)
        {
            return res.status(400).json({msg:'post not  liked'});
        }
    

       const removeIndex=post.likes.map(like=>like.user.toString()).indexOf(req.user.id); 
        post.likes.splice(removeIndex,1);

        await post.save()
        res.json(post.likes);

    } 
      
    catch (error) {
        
        console.error(error.message);
  
        res.status(500).send('Server Error');

    }
})


//adding comments to a post
router.post('/comments/:id',[auth,[
    check('text','text is required').not().isEmpty()]
],async(req,res)=>{
    const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}

try {
    const user=await User.findById(req.user.id).select('-password');
    const post=await Post.findById(req.params.id);
    const newComment={
        text:req.body.text,
        name:user.name,
        user:req.user.id
    
    };
    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);


} catch (error) {
    console.error(error.message)
    res.status(500).send('server error');
}




});




//deleting a comment
router.delete('/comments/:id/:comment_id',auth,async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id);


        const comment =post.comments.find(comment=>comment.id===req.params.comment_id);

        if(!comment)
        {
            return res.status(404).json({msg:'comment does not exist'});  
        }        
        if(comment.user.toString() !== req.user.id)
        {
            return res.status(401).json({msg:'invalid request'});   
        }

        const removeIndex=post.comments.map(comment=>comment.user.toString()).indexOf(req.user.id); 
        post.comments.splice(removeIndex,1);

        await post.save()
        res.json(post.comments)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
});




module.exports=router;