
//importing packages
import React,{Fragment,useEffect, useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




//importing styles
import './App.css';
import './styles/index.css';



//importing components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
// import library from './components/library/Library';


//redux
import {Provider} from 'react-redux';
import store from './store';

//importing other functions
 import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);

}

//main functional component
const App=()=> {

    
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);

  return (

    <Provider store={store}>


    <Router>
      <Fragment>

       {/* Navbar component */}
        <Navbar/>

        {/* Landin page component */}
        <Route exact path="/" component={Landing}/>

        {/* alert component */}
        <Alert/>

        {/* switch */}
        <Switch>
        {/* register page route */}
          <Route exact path="/register" component={Register}/>
          
          {/* login page route */}
          <Route exact path ="/login" component={Login}/>
          
          {/* dashboard route */}
          <PrivateRoute exact path ="/dashboard" component={Dashboard}/>
        
        
        
        </Switch>
      </Fragment>
    </Router>

    </Provider>

  );
}

export default App;
