import React,{Fragment,useState} from 'react'
import {addFile} from '../../actions/library/addFile';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
const Addfile=({addFile})=> {
    const [file,setFile]=useState('')



    const onChange=e=>{
        setFile(e.target.files[0]);
    }

    const onSubmit=async e=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('file',file);

        addFile(formData);
    }
    return (
        <Fragment>
<section className='text-gray-700 body-font'>
  <div className='container px-5 py-24 mx-auto'>
    <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
      <h1 className='sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900'>Add Files</h1>
      <p className='lg:w-1/2 w-full leading-relaxed text-base'>The files you upload are stored in a mongodb cloud atlas server </p>
    </div>
    </div>
    
</section>


<form className='flex items-center justify-center bg-grey-lighter' onSubmit={onSubmit}>
  <label className='w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-300'>
    <svg className='w-8 h-8' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
      <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
    </svg>
    <span className='mt-2 text-base leading-normal'>Select a file</span>

    <input type='file' name='file'  className='hidden' onChange={onChange}/>   
  </label>
  <input type='submit' className="bg-gray-500 items-center hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"/>
  

</form>
</Fragment>
    )
}

Addfile.propTypes={
  addFile:PropTypes.func.isRequired
}


export default connect(null,{addFile})(Addfile)
