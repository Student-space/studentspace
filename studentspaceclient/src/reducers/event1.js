import {
    GET_EVENTS,
    EVENT_ERROR,
    DELETE_EVENT,
    ADD_EVENT,
  
  } from '../actions/types';
  
  const initialState = {
    events: [],
    event1: null,
    loading: true,
    error: {}
  };
  
  function eventReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_EVENTS:
        return {
          ...state,
          posts: payload,
          loading: false
        };
      case ADD_EVENT:
        return {
          ...state,
          events: [payload, ...state.events],
          loading: false
        };
      case DELETE_EVENT:
        return {
          ...state,
          events: state.events.filter((event1) => event1._id !== payload),
          loading: false
        };
      case EVENT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
  
  export default eventReducer;