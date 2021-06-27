import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import wave from '../../images/profileIcons/Vector.png'
const Posts = ({getPosts,post:{posts,loading}}) => {
    useEffect(()=>{
         getPosts();
    },[getPosts]);
    return loading ? ( 
    <Spinner/>
    ):(
          <>    
          <img src={wave}  className="fixed hidden lg:block inset-0 h-full "/>

               <PostForm/>
               
               <div class="pt-6 pb-12">
               <div class="container w-50 lg:w-3/6 mx-auto flex flex-col">
                {posts.map(post=>(
                    
                    <PostItem key={post._id} post={post}/>
                ))}
                </div></div>
               
                
                </>
       );
};

Posts.propTypes = {
getPosts:PropTypes.func.isRequired,
post:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
post:state.post
})
export default connect(mapStateToProps,{getPosts})(Posts);