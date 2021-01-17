import axios from 'axios';
import {setAlert} from './alert';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT

    
} from './types';
import setAuthToken from '../utils/setAuthToken'



//load user
export const loadUser=()=>async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);

    }
    
    try {
        const res=await axios.get('http://localhost:5000/users/')
        
        dispatch({
            type:USER_LOADED,
            payload:res.data
        });
    
    } catch (error) {
        dispatch({
            type:AUTH_ERROR
        });
    }
}



//register user
export const userRegister=({firstName,lastName,email,password})=>async dispatch=>{
   
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body=JSON.stringify({firstName,lastName,email,password}); 

    try {
        const res= await axios.post('http://localhost:5000/users/signup',body,config)
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
       dispatch(setAlert(`please login with your new credentials`,`success`));
    } catch (err) {
         const errors=err.response.data.errors;
        if(errors)
        {
            errors.forEach(error=>dispatch(setAlert(error.msg,`fail`)))
        }
        dispatch({
            type:REGISTER_FAIL
        });   
    }
}


//user login
export const userLogin=(email,password)=>async dispatch=>{
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body={email,password}; 

    try {
        const res= await axios.post('http://localhost:5000/users/signin',body,config)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        });
        dispatch(loadUser());
    } catch (err) {
        const errors=err.response.data.errors;
        if(errors)
        {
            errors.forEach(error=>dispatch(setAlert(error.msg,`fail`)))
        }
        dispatch({
            type:LOGIN_FAIL
        });   
    }
}


//user logout
export const userLogout=()=>dispatch=>{
    dispatch({type:LOGOUT})
}