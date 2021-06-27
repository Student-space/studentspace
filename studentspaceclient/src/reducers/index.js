//combines all the reducers

import {combineReducers} from 'redux';

//importing redcers
import alert from './alert';
import  auth from './auth';
import profile from './profile';
import post from './post';
import event1 from './event1';
import addFile from './library/addFile';
import  searchFile from './library/searchFile';
import downloadFile from './library/downloadFile'

export default combineReducers({
alert,
auth,
profile,
post,
event1,
addFile,
searchFile,
downloadFile
})