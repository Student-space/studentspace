import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { deleteEvent} from '../../actions/events';

const EventItem = ({deleteEvent,auth,event1:{_id,title,text,user,date}}) => 
     (
        <div className="p-10 flex flex-col h-screen my-auto items-center ">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="font-bold text-xl mb-2">{user}</div>
    <img className="w-full" className="lazy" src="https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" alt="Mountain" />
    <div className="px-6 py-4">
    <p className="text-gray-700 text-base">{title}</p>
      <p className="text-gray-700 text-base">{text}</p>
    </div>
    <div className="px-6 pt-4 pb-2">   
<span className="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Posted on <Moment format='DD/MM/YYYY'>{date}</Moment></span>
{!auth.loading&&user===auth.user._id && (
    
    <button onClick={e=>deleteEvent(_id)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
  </div>
</div>
    );


EventItem.propTypes = {
event1:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
deleteEvent:PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,{deleteEvent})(EventItem);
