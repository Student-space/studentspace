import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import EventItem from './EventItem';
import EventForm from './EventForm';
import { getEvents } from '../../actions/event';
import wave from '../../images/profileIcons/Vector.png'

const Events = ({getEvents,post:{posts,loading}}) => {
    useEffect(()=>{
         getEvents();
    },[getEvents]);
    return loading ? ( 
    <Spinner/>
    ):(
          <>    
          <img src={wave}  className="fixed hidden lg:block inset-0 h-full "/>
          
               <EventForm/>
               
               <div class="pt-6 pb-12">
               <div class="container w-50 lg:w-3/6 mx-auto flex flex-col">
                {posts.map(post=>(
                    
                    <EventItem key={post._id} post={post}/>
                ))}
                </div></div>
               
                
                </>
       );
};

Events.propTypes = {
getEvents:PropTypes.func.isRequired,
post:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
post:state.event
})
export default connect(mapStateToProps,{getEvents})(Events);