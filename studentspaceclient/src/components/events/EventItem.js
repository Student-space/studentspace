import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import { deleteEvent} from '../../actions/event';

const EventItem = ({deleteEvent,auth,post:{_id,text,user,name,title,date}}) => 
     (
      <div class="flex flex-col md:flex-row overflow-hidden bg-gray-200 rounded-lg shadow-xl  mt-4 w-50 mx-2">
     
      <div class="h-64 w-auto md:w-1/2">
        <img class="inset-0 h-full w-full object-cover object-center" src="data:image/png;base64,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" />
      </div>
     
      <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <h3 class="font-semibold text-lg leading-tight truncate">{title}</h3>
        <p class="mt-2">
        {text}
        </p>
<span>
{!auth.loading&&user===auth.user._id && (
  
  <button onClick={e=>deleteEvent(_id)} class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
        <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
          posed on <Moment format='DD/MM/YYYY' >{date}</Moment> by {name}
        </p>
        </span>
      </div>
    </div>
    
    );

  

EventItem.propTypes = {
post:PropTypes.object.isRequired,
auth:PropTypes.object.isRequired,
deleteEvent:PropTypes.func.isRequired,
}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,{deleteEvent})(EventItem);

