import React from 'react'
import PropTypes from 'prop-types';
import Logo from '../../images/landingIcons/logo.jpg'
import {Link} from 'react-router-dom';

function Landing(props) {
    return (
        
        <section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="logo" src={Logo}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Student Space</h1>
      <p className="mb-8 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <div className="flex justify-center">
        <Link to='/login' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</Link>
        <Link to='/register' className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Register</Link>
      </div>
    </div>
  </div>
</section>
        
    )
}



export default Landing

