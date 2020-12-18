import React, { Fragment ,useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import loginWaveIcon from '../../images/loginIcons/blackvector.png';
import char from '../../images/loginIcons/char.png';
import avatar from '../../images/loginIcons/avatar.png';

function Login() {

  //use state hook
  const [formData,setFormData]=useState(
    {
      email:'',
      password:''
     
    }
  );
  
  //destructring the data
  const{email,password}=formData  ;
  
  //onChnage handler to add value to setFormdata
  const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
  
  //onSubmit handler to submit the form data
  
    return (
        
        <section>
        <img
          src={loginWaveIcon}
          className="fixed hidden lg:block inset-0 h-full"/>
          
          <div
      class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2">

            <img
        src={char}
        class="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"/>


          <form className="flex flex-col justify-center items-center w-1/2">
            <img src={avatar} className="w-32" />
            <h2
              className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Welcome Back
            </h2>
            <div className="relative">
              <i className="fa fa-user absolute text-primarycolor text-xl"></i>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={e=>onChange(e)}
                required
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={e=>onChange(e)}
                required
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <Link to="#" className="self-end mt-4 text-gray-600 font-bold"
              >Forgot password?</Link>
            {/* <Link
              to="#"
              className="py-3 px-20 bg-grey-500 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
              >Login</Link> */}
              <Link to='/dashboard' className="inline-flex rounded-full text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</Link>
          </form>
          </div>
          </section>
      
    

        
    )
}



export default Login

