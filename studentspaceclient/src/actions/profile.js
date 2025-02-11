import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    ACCOUNT_DELETED
  } from './types';
  import { setAlert } from './alert';
  import axios from 'axios';

  // Get current users profile
export const getCurrentProfile = () => async dispatch=> {
    try {
      const res = await axios.get('http://localhost:5000/profile/me');
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  

  
  // Get profile by ID
  export const getProfileById = (userId) => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:5000/profile/user/${userId}`);
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
 
  
  // Create or update profile
  export const createProfile = (formData, history, edit = false) => async (
    dispatch
  ) => {
    try {
      const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
      const res = await axios.post('http://localhost:5000/profile', formData,config);
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
  
      if (!edit) {
        history.push('/dashboard');
      }
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'fail')));
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  // Delete account & profile
  export const deleteAccount = () => async (dispatch) => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      try {
        await axios.delete('http://localhost:5000/profile');
  
        dispatch({ type: CLEAR_PROFILE });
        dispatch({ type: ACCOUNT_DELETED });
  
        dispatch(setAlert('Your account has been permanently deleted'));
      } catch (err) {
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    }
  };