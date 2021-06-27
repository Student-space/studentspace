import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { addLike,removeLike,deletePost} from '../../actions/post';

const PostItem = ({addLike,removeLike,deletePost,auth,post:{_id,text,user,name,title,likes,comments,date,image},showActions}) => 
     (
      <div class="flex flex-col md:flex-row overflow-hidden bg-gray-200 rounded-lg shadow-xl  mt-4 w-50 mx-2">
     
      <div class="h-64 w-auto md:w-1/2">
        <img class="inset-0 h-full w-full object-cover object-center" src={image||"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" }/>
      </div>
     
      <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h3 class="font-semibold text-lg leading-tight truncate">{title}</h3>
        <p class="mt-2">
        {text}
        </p>
      <span>
      {showActions && (
      <Fragment>
           <button onClick={e=>addLike(_id)} className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
<button onClick={e=>removeLike(_id)} className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
   <Link to={`/community/${_id}`} className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
  
  <button onClick={e=>deletePost(_id)} class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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

        <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          posed on <Moment format='DD/MM/YYYY' >{date}</Moment> by {name}
        </p>
        </span>
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
