import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';
import FileBase from 'react-file-base64';

const PostForm = ({addPost}) => {
    const [formData,setFormData]=useState({text:'',image:''});

    const{text,image}=formData

    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=e=>{
      e.preventDefault();
      addPost(formData);
    }
    return (
        <div className="w-full max-w-xs shadow-xl  p-8 m-4  border-solid border-2 border-black-900 ">
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={e=>{
            onSubmit(e)
        }}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="description">
              Description
            </label>
            <input className="shadow appearance-none border0 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="abcdefgh" name="text" value={text} onChange={e=>onChange(e)} required/>
            <input type='submit'  className="inline-flex rounded-full text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value='submit'/>
            < div>
              <FileBase type="file" multiple={false} onDone={({base64})=>setFormData({ ...formData, image: base64 })}/>

            </div>
          </div>
        </form>
        <hr/>
      </div>
    )
}

PostForm.propTypes = {
addPost:PropTypes.func.isRequired
}

export default connect(null,{addPost})(PostForm)
