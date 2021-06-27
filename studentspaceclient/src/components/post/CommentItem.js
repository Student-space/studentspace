import React,{Fragment} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({postId,comment:{_id,text,name,user,date},auth,deleteComment}) => {
    return (
        <div class=" md:flex-row overflow-hidden  rounded-lg shadow-xl  mt-4 w-50 mx-2 border-solid border-4 border-black">
        <div>
        <p class="text-gray-700"> Posted by {name}</p>
        </div>
        <p class=" text-1xl font-bold mb-2 text-gray-800 "> {text}</p>
        <p class="text-gray-700"> Posted on <Moment format='DD/MM/YYYY'>{date}</Moment></p>
        {!auth.loading && user ===auth.user._id && (
            <button onClick={e=>deleteComment(postId,_id)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg version="1.0" 
         width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
         preserveAspectRatio="xMidYMid meet">
        
        <g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M60 150 c0 -5 -9 -10 -20 -10 -11 0 -20 -7 -20 -15 0 -12 13 -15 60
        -15 47 0 60 3 60 15 0 8 -9 15 -20 15 -11 0 -20 5 -20 10 0 6 -9 10 -20 10
        -11 0 -20 -4 -20 -10z"/>
        <path d="M24 69 c3 -17 6 -40 6 -50 0 -16 8 -19 50 -19 42 0 50 3 50 19 0 10
        3 33 6 50 l6 31 -62 0 -62 0 6 -31z m33 -31 c-2 -13 -4 -5 -4 17 -1 22 1 32 4
        23 2 -10 2 -28 0 -40z m50 0 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28
        0 -40z"/>
        </g>
        </svg>   
          </button>
        )}
      </div>
    )
}

CommentItem.propTypes = {
postId:PropTypes.number.isRequired,
comment:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
deleteComment:PropTypes.func.isRequired
}

const mapStateToProps=state=>({
auth:state.auth
})
export default connect(mapStateToProps,{deleteComment})(CommentItem);
