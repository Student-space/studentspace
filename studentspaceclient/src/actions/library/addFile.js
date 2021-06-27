import {UPLOAD_SUCCESS,UPLOAD_FAIL} from '../types';
import axios from 'axios'


export const addFile=(formData)=>async dispatch=>{
  const config={
    headers:{
        'Content-Type':'multipart/form-data'
    }
   }
    try {
       
         const res=await axios.post(`http://localhost:5000/library/upload`,formData,config);
         console.log(res);
        dispatch({
            type:UPLOAD_SUCCESS,
            payload:'success'
        });
    } catch (error) {
       console.error(error);
       dispatch({
            type:UPLOAD_FAIL,
            payload:'fail'
       })
    }
}
