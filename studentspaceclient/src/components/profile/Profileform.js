import React,{Fragment,useState} from 'react'
import PropTypes from 'prop-types';
import { Link,useRouteMatch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import wave from '../../images/profileIcons/Vector.png'
import {createProfile} from '../../actions/profile';

const Profileform =({createProfile,history})  => {
    const [formData,setFormData]=useState({
        semester:'',
        skills:'',
        bio:'',
        twitter:'',
        facebook:'',
        linkdin:'',
        instagram:''
    });
    
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = (e) => {
        e.preventDefault();
        createProfile(formData, history);
      };
    const {
        semester,
        skills,
        bio,
        twitter,
        facebook,
        linkdin,
        instagram
    }=formData;
    return (
        <section>
         <img src={wave}  className="fixed hidden lg:block inset-0 h-full"/>
         <div className="mx-auto container flex items-center" id="nav">
  <div className="w-full pt-2 p-4">
    <div className="mx-auto md:p-6 md:w-1/2">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-2xl text-orange-500 hover:text-orange-500 transition duration-500 p-4">
          <i className="fas fa-sign-in-alt fa-fw fa-lg"></i>
          Create-Profile.
        </h1>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form onSubmit={e=>onSubmit(e)}>
          <div className="mb-8">
            <label for="semester" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Semester
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="semester" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="1 or 2 or 3 ..." name='semester' value={semester} onChange={e=>onChange(e)} required/>
            </div>
            <strong className="text-red-500 text-xs italic">Semester is required</strong>
          </div>

          <div className="mb-8">
            <label for="skills" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Skills
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="skills" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="C++,SQL,etc.." name='skills' value={skills}  onChange={e=>onChange(e)} required/>
            </div>
            <strong className="text-red-500 text-xs italic">Skills are required</strong>
          </div>

          <div className="mb-8">
            <label for="bio" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Bio
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="bio" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="i am a human" name='bio' value={bio}  onChange={e=>onChange(e)} />
            </div>
          </div>
          <div className="mb-8">
            <label for="twitter" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Twitter
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="twitter" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="i am a human" name='twitter' value={twitter}  onChange={e=>onChange(e)} />
            </div>
          </div>
          <div className="mb-8">
            <label for="facebook" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Facebook
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="facebook" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="i am a human" name='facebook' value={facebook}  onChange={e=>onChange(e)}/>
            </div>
          </div>
          <div className="mb-8">
            <label for="linkdin" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              linkdin
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="linkdin" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="i am a human" name='linkdin' value={linkdin}  onChange={e=>onChange(e)} />
            </div>
          </div>
          <div className="mb-8">
            <label for="instagram" className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-black">&nbsp;*</span>
              Instagram
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="instagram" className="block pr-10 shadow appearance-none border-2 border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" placeholder="i am a human" name='instagram' value={instagram}  onChange={e=>onChange(e)}/>
            </div>
          </div>
          <input type="submit" className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"/>
          <hr/>
        </form>
      </div>
    </div>
  </div>
</div>   
        </section>
    )
}

Profileform.propTypes = {
createProfile:PropTypes.func.isRequired,
}


export default connect(null,{createProfile})(withRouter(Profileform));
