import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEvent} from '../../actions/event';


const EventForm = ({addEvent}) => {
    const [formData,setFormData]=useState({text:'',expiry:'',title:''});

    const{text,expiry,title}=formData

    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=e=>{
      e.preventDefault();
      addEvent(formData);
    }
    return (
        <div className=" shadow-xl  p-8 m-4  border-solid border-2 border-black-900 bg-local fixed ">
          
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={e=>{
            onSubmit(e)
        }}>
          <div className="mb-6">
          <h1>Share an Event</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
              Add a Title
            </label>
            
            <input className="shadow appearance-none border0 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="abcdefgh" name="title" value={title} onChange={e=>onChange(e)} required/>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
              Description
            </label>
            
            <input className="shadow appearance-none border0 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="abcdefgh" name="text" value={text} onChange={e=>onChange(e)} required/>
            
            <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
              Expiry date
            </label>
            
            <input className="shadow appearance-none border0 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="abcdefgh" name="expiry" value={expiry} onChange={e=>onChange(e)} required/>
            <h2> </h2>
            <input type='submit'  className="inline-flex rounded-full text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value='submit'/>

          </div>
        </form>
        <hr/>
      </div>
    )
}

EventForm.propTypes = {
addEvent:PropTypes.func.isRequired
}

export default connect(null,{addEvent})(EventForm)
