import { func } from 'prop-types';
import{
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_FAIL,
LOGIN_SUCCESS

} from '../actions/types';



const initalState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
}

export default function(state=initalState,action)
{
    const{type,payload}=action;
    switch(type)
    {
      case REGISTER_SUCCESS:
          return{
            ...state,
            isAuthenticated:true,
            loading:false
          }
          
       case LOGIN_SUCCESS:
          localStorage.setItem('token',payload.token);
          return{
              ...state,
              payload,
              isAuthenticated:true,
              loading:false

          }

          case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
              localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
            
           case USER_LOADED:
               return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload

               }
            
               
          default:
          return state;
    }
}