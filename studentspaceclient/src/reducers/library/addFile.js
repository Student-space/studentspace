import {UPLOAD_SUCCESS,UPLOAD_FAIL} from '../../actions/types';

const initialState=[];
export default function(state=initialState,action)
{   
    const {type,payload}=action
    switch(type)
    {
        case UPLOAD_SUCCESS:
            console.log(payload);
            return state;          
        case UPLOAD_FAIL:
            console.log(payload);
            return state;
        default:
            return state;
    }
}