import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {searchFile} from '../../actions/library/searchFile';
import File from './File';
import wave from '../../images/profileIcons/Vector.png'

const Home=({searchFile,searchCompleted})=> {

  //hooks
  const[searchData,setSearchData]=useState({
    search:''
  })

  //destructuring;
  const {search}=searchData;


   const onSubmit= async e=>{
     e.preventDefault();
     searchFile(search)
   }





    return (
    
    <>
        <section className='text-gray-700 body-font'>
  <div className='container px-5 py-24 mx-auto'>
    <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
      <h1 className='sm:text-5xl text-5xl font-medium title-font mb-1 text-gray-900'>Search Files</h1>
      <p className='lg:w-1/2 w-full leading-relaxed text-base'>This app lets you upload and download any type of file to a remote monogodb server.<strong>Note: Server running on free plan and cant use more than 500mb</strong>,Use the about search bar to search files uploaded previosuly or use the add button to add your own files.</p>
      <img src={wave}  className="fixed hidden lg:block inset-0 h-full "/>
    </div>


  <form onSubmit={e=>onSubmit(e)} className='p-8'>
  <div className='bg-white flex items-center rounded-full shadow-xl'>
    <input className='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'  type='text' placeholder='Search' name='search' value={search} onChange={e => setSearchData({...searchData,search:e.target.value})} required />
    
    <div className='p-4'>
      <input type='submit' className='bg-black text-black rounded-full p-2 hover:bg-gray-400 focus:outline-none w-12 h-12 flex items-center justify-center'/>
      </div>
  </div>
</form>  
  </div>
</section>
  <div className='flex items-center justify-center'>
    {
    searchCompleted ? <File/>:(<h1>...</h1>)
  }
    </div>
 

    
 
  

<div>
    <Link  className='flex mx-auto mt-16 text-white bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' to='/addfile'>Add file</Link>
  </div>
</>




    )
}

Home.propTypes={
searchFile:PropTypes.func.isRequired

}

const mapStateToProps=state=>({searchCompleted:state.searchFile.searchCompleted})
  
export default connect(mapStateToProps,{searchFile})(Home);

