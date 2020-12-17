import React from 'react';
import {Link} from 'react-router-dom';
import avatar from '../../images/registerIcons/avatar.png';
import blackVector from '../../images/registerIcons/blackvector.png'
import logo from '../../images/registerIcons/logo.png';
function Register() {
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


          <form className="flex flex-col justify-center items-center w-1/2">
            <img src={avatar} className="w-32" />
            <h2
              className="my-8 font-display font-bold text-3xl text-gray-700 text-center">
              Create Account
            </h2>
            <div className="relative">
              <i className="fa fa-user absolute text-primarycolor text-xl"></i>
              <input
                type="text"
                placeholder="enter email-Id"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="password"
                placeholder="Enter a password"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <div className="relative mt-8">
              <i className="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
                type="password"
                placeholder="Enter password again"
                className="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"/>
            </div>
            <Link to="#" className="self-end mt-4 text-gray-600 font-bold"
              >Have an account?</Link>
            {/* <Link
              to="#"
              className="py-3 px-20 bg-grey-500 rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
              >Login</Link> */}
              <Link to='/login' className="inline-flex rounded-full text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</Link>
          </form>
          </div>
          </section>
    )
}


export default Register