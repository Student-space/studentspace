//combines all the reducers

import {combineReducers} from 'redux';

//importing redcers
import alert from './alert';
import  auth from './auth';
import profile from './profile';
import post from './post';
import event1 from './event1';

export default combineReducers({
alert,
auth,
profile,
post,
event1
})