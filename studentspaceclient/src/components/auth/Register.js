import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

//importing actions
import {setAlert} from '../../actions/alert';
import {userRegister} from '../../actions/auth';

//importing logo
import avatar from '../../images/registerIcons/avatar.png';
import blackVector from '../../images/registerIcons/blackvector.png'
import logo from '../../images/registerIcons/logo.png';





const Register=({setAlert,userRegister,isAuthenticated}) => {
//Hooks for taking input
const [formData,setFormData]=useState(
  {
    name:'',
    email:'',
    password:'',
    password2:''
  }
);

//destructring the data
const{name,email,password,password2}=formData  ;

//onChnage handler to add value to setFormdata
const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

//onSubmit handler to submit the form data
const onSubmit=e=>{
  e.preventDefault();
  if(password !==password2){
      setAlert('Password dont match','danger');
  }
  else
  {
   userRegister({name,email,password});
  }
};
if(isAuthenticated)
{
  <Redirect to='/user/signin'/>
  setAlert('Login with the registered credentials','danger');
}


    return (
        <section>
        <img
          src={blackVector}
          className="fixed hidden lg:block inset-0 h-full"/>
          
          <div
      className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">

            <img
        src={logo}
        className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"/>


          <form onSubmit={e=>onSubmit(e)} className="flex flex-col justify-center items-center w-1/2">
            <img src={avatar} className="w-32" />
            <h2
              className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Create Account
            </h2>
            <div className="relative">
              <i className="fa fa-user absolute text-primarycolor text-xl"></i>
              <input
                type="text"
                name="email"
                value={email}
                placeholder="enter email-Id"
                onChange={e=>onChange(e)}
               required
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="text"
                name="name"
                value={name}
                onChange={e=>onChange(e)}
               required
                placeholder="Enter your Name"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="password"
                name="password"
                value={password}
                onChange={e=>onChange(e)}
               required
                placeholder="Enter a password"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={e=>onChange(e)}
               required
                placeholder="Enter password again"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <input type="submit" className="inline-flex rounded-full text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"/>
            <Link to="/login" className="self-end mt-4 text-gray-600 font-bold"
              >Have an account?</Link>
              
          </form>
          </div>
          </section>
    )
}

Register.propTypes={
  setAlert:PropTypes.func.isRequired,
  register:PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool
}


const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{setAlert,userRegister})(Register);