import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../actions/post';

const Post = ({getPost,post:{post,loading},match}) => {
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost]);

     return loading || post ===null ? <Spinner/>:<Fragment>
                 <PostItem post={post} showActions={false}/>
                 <CommentForm postId={post._id}/>
                 {post.comments.map(comment=>(
                     <CommentItem key={comment._id} comment={comment} postId={post._id}/>
                 ))}
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
