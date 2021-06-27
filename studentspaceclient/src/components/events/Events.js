import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import EventItem from './EventItem';
import EventForm from './EventForm';
import { getEvents } from '../../actions/events';

const Events = ({getEvents,event1:{events,loading}}) => {
    useEffect(()=>{
         getEvents();
    },[getEvents]);
    return loading ? ( 
    <Spinner/>
    ):(
           <Fragment>
               <h1>textxtt</h1>
               <EventForm/>
               
               <div>
                {events.map(event1=>(
                    
                    <EventItem key={event1._id} event1={event1}/>
                ))}
               </div>
           </Fragment>
       );
};

Events.propTypes = {
getEvents:PropTypes.func.isRequired,
event1:PropTypes.object.isRequired
}

const mapStateToProps=state=>({
event1:state.event1
})
export default connect(mapStateToProps,{getEvents})(Events);