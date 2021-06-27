import {
    GET_EVENTS,
    EVENT_ERROR,
    DELETE_EVENT,
    ADD_EVENT,
  
  } from '../actions/types';
  
  const initialState = {
    posts: [],
    post: null,
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
          posts: [payload, ...state.posts],
          loading: false
        };
      case DELETE_EVENT:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== payload),
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