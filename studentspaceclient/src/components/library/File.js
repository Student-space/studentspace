import React,{Fragment} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {downloadFile} from '../../actions/library/downloadFile';
import FileSaver from 'file-saver';

const File=({searchFile:{file,filename},downloadFile,downloadFile0:{fileURL}})=> {


    console.log(fileURL);
    return (
        <>
        <button  className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span><a onClick={e=>downloadFile(filename)}  >{filename}</a>
  <a download={filename} target="_blank" href={fileURL} >Download</a></span>
  
</button>
</>
    )
}


File.propTypes={
downloadFile:PropTypes.func.isRequired
}
const mapStateToProp=state=>({
    searchFile:state.searchFile,
    downloadFile0:state.downloadFile
})
export default connect(mapStateToProp,{downloadFile})(File);
