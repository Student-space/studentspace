//combines all the reducers

import {combineReducers} from 'redux';

//importing redcers
import alert from './alert';
import  auth from './auth';

export default combineReducers({
alert,
auth
})