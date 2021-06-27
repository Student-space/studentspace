import React from 'react'
import PropTypes from 'prop-types'
import icon from '../../images/profileIcons/icon.png'

function Profile(props) {
    return (
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={icon}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Profile</h1>
      <p class="mb-8 leading-relaxed">Semester</p>
      <p class="mb-8 leading-relaxed">Skills</p>
      <p class="mb-8 leading-relaxed">Bio</p>
      <h3>Socials</h3>
        <span>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg version="1.0"
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M0 80 l0 -80 45 0 c43 0 45 1 45 29 0 18 -6 31 -17 36 -17 6 -17 7
-1 19 10 7 18 20 18 29 0 12 19 27 36 27 10 0 3 -29 -9 -34 -9 -5 -9 -7 1 -12
14 -7 16 -34 2 -34 -5 0 -10 -13 -10 -30 0 -25 4 -30 25 -30 25 0 25 1 25 80
l0 80 -80 0 -80 0 0 -80z"/>
</g>
</svg>
</button>
<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg version="1.0" 
 width="20.000000pt" height="16.000000pt" viewBox="0 0 20.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M112 148 c-7 -7 -12 -18 -12 -25 0 -18 -20 -16 -58 7 l-32 20 2 -33
c1 -17 10 -45 21 -60 19 -28 19 -28 -3 -34 -28 -8 -7 -23 33 -23 61 0 105 42
121 116 6 27 4 32 -16 38 -33 8 -43 7 -56 -6z"/>
</g>
</svg>
  
</button>
<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg version="1.0" 
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M50 129 c0 -6 -7 -9 -15 -5 -12 4 -15 -5 -15 -49 l0 -55 60 0 60 0 0
60 0 60 -45 0 c-26 0 -45 -5 -45 -11z m80 -9 c0 -5 -4 -10 -10 -10 -5 0 -10 5
-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-25 -40 c0 -18 -6 -26 -23 -28 -24
-4 -38 18 -28 44 3 9 15 14 28 12 17 -2 23 -10 23 -28z"/>
</g>
</svg>
  
</button>
<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg version="1.0" 
 width="16.000000pt" height="16.000000pt" viewBox="0 0 16.000000 16.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,16.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M7 154 c-4 -4 -7 -40 -7 -81 l0 -73 80 0 81 0 -3 78 -3 77 -70 3
c-39 1 -74 0 -78 -4z m43 -29 c0 -8 -7 -15 -15 -15 -16 0 -20 12 -8 23 11 12
23 8 23 -8z m0 -65 c0 -29 -4 -40 -15 -40 -11 0 -15 11 -15 40 0 29 4 40 15
40 11 0 15 -11 15 -40z m88 -2 c2 -29 0 -38 -12 -38 -11 0 -16 9 -16 30 0 17
-4 30 -10 30 -5 0 -10 -13 -10 -30 0 -20 -5 -30 -15 -30 -11 0 -15 11 -15 41
l0 40 38 -3 c35 -3 37 -5 40 -40z"/>
</g>
</svg>
</button>
</span>
        </div>
    </div>
</section>
    )
}

Profile.propTypes = {

}

export default Profile

