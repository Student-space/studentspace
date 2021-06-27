import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';
import wave from '../../images/profileIcons/Vector.png'

const Post = ({getPost,post:{post,loading},match}) => {
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost]);

     return loading || post ===null ? <Spinner/>:<Fragment>
         <img src={wave}  className="fixed hidden lg:block inset-0 h-full "/>
         <CommentForm postId={post._id}/>
         <div class="pt-6 pb-12">
               <div class="container w-50 lg:w-3/6 mx-auto flex flex-col">
                 <PostItem post={post} showActions={false}/>
                 
                 {post.comments.map(comment=>(
                     <CommentItem key={comment._id} comment={comment} postId={post._id}/>
                 ))}
                 </div>
                 </div>
     </Fragment>
}

Post.propTypes = {
getPost:PropTypes.func.isRequired,
post:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    post:state.post
});

export default connect(mapStateToProps,{getPost})(Post)
