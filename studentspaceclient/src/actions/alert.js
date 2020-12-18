import { v4 as uuidv4 } from 'uuid';


//import action types
import {SET_ALERT,
    REMOVE_ALERT
} from './types';


export const setAlert=(msg,alertType,timeout=3000)=>dispatch=>{

    const id=uuidv4();
    dispatch({
        type:SET_ALERT,
        payload:{msg,altertType,id}
    });
    setTimeout(()=>dispatch({
        type:REMOVE_ALERT,payload:id
    }),timeout);
};