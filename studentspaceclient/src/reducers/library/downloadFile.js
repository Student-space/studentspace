import { DOWNLOAD} from "../../actions/types";

const initialState={
    fileURL:null
};

export default function(state=initialState,action)
{
    const{type,payload}=action;
    switch(type)
    {
        case DOWNLOAD:
           return {
                ...state,
                fileURL:payload
            }
        default:
            return{
                ...state
            }    
    }

}