import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { addLike,removeLike,deletePost} from '../../actions/post';

const PostItem = ({addLike,removeLike,deletePost,auth,post:{_id,text,user,likes,comments,date,image},showActions}) => 
     (
        <div className="p-10 flex flex-col h-screen my-auto items-center ">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="font-bold text-xl mb-2">{user}</div>
    <img className="w-full" className="lazy" src={image||"https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"} alt="Mountain" />
    <div className="px-6 py-4">
      
      <p className="text-gray-700 text-base">{text}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {showActions && (
        <Fragment>
             <button onClick={e=>addLike(_id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
 <svg version="1.0" 
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M77 153 c-2 -5 -7 -19 -10 -33 -5 -20 -12 -26 -34 -25 -26 0 -28 -3
-31 -47 l-3 -48 59 0 60 0 16 40 c21 54 20 60 -9 60 -21 0 -25 5 -25 30 0 28
-13 40 -23 23z m-37 -104 c0 -28 -4 -39 -12 -37 -24 8 -22 78 2 78 5 0 10 -18
10 -41z"/>
</g>
</svg>
{likes.length >0 && (<span>{likes.length}</span>)}

</button>
{'     '}  {'  '}
<button onClick={e=>removeLike(_id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
<svg version="1.0"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 106 c0 -44 3 -56 16 -56 12 0 14 10 12 52 -4 74 -28 77 -28 4z"/>
<path d="M40 110 c0 -46 39 -113 59 -100 8 4 10 16 6 29 -5 17 -2 21 18 21 31
0 39 20 26 60 -10 28 -14 30 -60 30 l-49 0 0 -40z"/>
</g>
</svg>

</button>
{'     '}  {'  '}
     <Link to={`/community/${_id}`} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
 <svg version="1.0"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M17 144 c-4 -4 -7 -27 -7 -51 0 -32 4 -45 18 -50 9 -4 21 -13 25 -20
8 -12 11 -12 25 0 10 9 28 17 42 19 23 3 25 7 25 53 l0 50 -60 3 c-34 2 -64 0
-68 -4z"/>
</g>
</svg>
{comments.length >0 && (<span>{comments.length}</span>)}
  
</Link>
{' '}{''}
{!auth.loading&&user===auth.user._id && (
    
    <button onClick={e=>deletePost(_id)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
        </Fragment>
      )}
   
     
<span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Posted on <Moment format='DD/MM/YYYY'>{date}</Moment></span>
    </div>
  </div>
</div>
    );

    PostItem.defaultProps = {
      showActions: true
    };

PostItem.propTypes = {
post:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
addLike:PropTypes.func.isRequired,
removeLike:PropTypes.func.isRequired,
deletePost:PropTypes.func.isRequired,
showActions:PropTypes.bool
}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,{addLike,removeLike,deletePost})(PostItem);
