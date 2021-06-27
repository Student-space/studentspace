import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_EVENTS,
  EVENT_ERROR,
  DELETE_EVENT,
  ADD_EVENT,
 
} from './types';

// Get eventz
export const getEvents = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/events');

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete event
export const deleteEvent = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/event/${id}`);

    dispatch({
      type: DELETE_EVENT,
      payload: id
    });

    dispatch(setAlert('Event Removed', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add event
export const addEvent = ({text,expiry,title}) => async dispatch => {
  const config={
    headers:{
        'Content-Type': 'application/json'
    }
}
  try {
    const body=JSON.stringify({text,expiry,title}); 
    const res = await axios.post('http://localhost:5000/events', body,config);

    dispatch({
      type: ADD_EVENT,
      payload: res.data
    });

    dispatch(setAlert('Event Created', 'success'));
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

