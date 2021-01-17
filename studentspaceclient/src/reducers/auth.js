
import{
REGISTER_SUCCESS,
REGISTER_FAIL,
USER_LOADED,
AUTH_ERROR,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT

} from '../actions/types';



const initalState={
    refreshTokens:localStorage.getItem('token'),
    isAuthenticated:false,
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
            isAuthenticated:false,
            loading:false
          }
          
       case LOGIN_SUCCESS:
        
          localStorage.setItem('token',payload.refreshTokens);
          return{
              ...state,
              ...payload,
              isAuthenticated:true,
              loading:false

          }

          case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT:
              localStorage.removeItem('token');
            return{
                ...state,
                refreshTokens:null,
                isAuthenticated:false,
                loading:false,
                user:null
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