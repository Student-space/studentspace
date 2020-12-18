import axios from 'axios';
import {setAlert} from './alert';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL
    
} from './types';

//register user
export const register=({name,email,password})=>async dispatch=>{
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body=JSON.stringify({name,email,password}); 

    try {
        const res= await axios.post('/users',body,config)
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    } catch (error) {
        const errors=error.response.data.errors;
        if(errors)
        {
            errors.forEach(error=>dispatch(setAlert('test','danger')));
        }
        dispatch({
            type:REGISTER_FAIL
        });   
    }
}