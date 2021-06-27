import axios from 'axios';
import {DOWNLOAD,
SEARCH_FAIL} from '../types';


export const downloadFile =(filename)=>async dispatch=>{

try {
    const res=await axios.get(`http://localhost:5000/library/files/download/${filename}`);
    
    dispatch({
        type:DOWNLOAD,
        payload:res.config.url
    })
} catch (error) {
    console.error(error);
    dispatch({
        type:SEARCH_FAIL,
        payload:`fail`
    })
}
}