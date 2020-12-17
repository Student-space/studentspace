//importing packages
import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'




//importing styles
import './App.css';
import './styles/index.css';



//importing components
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


//main functional component
function App() {
  return (
    <Router>
      <Fragment>

       {/* Navbar component */}
        <Navbar/>

        {/* Landin page component */}
        <Route exact path="/" component={Landing}/>

        {/* switch */}
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path ="/login" component={Login}/>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
