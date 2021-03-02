import React,{useState,useEffect} from 'react'
import {Link,Redirect} from 'react-router-dom';
import {SiAddthis } from "react-icons/si";
import {AiOutlineSearch} from "react-icons/ai";
import './Library.css';
function Library() {
    const [semState,setsemState]=useState('5');
    const [branchState,setbranchState]=useState('');

    return (

      <section className="body-font">
          <div>
            <h1 className="text-center text-black-900 font-large body-font text-5xl" >Library </h1>
          </div>
          <div className="text-center">
            <h1 className="text-center text-black-900 font-medium text-2xl mt-2">Search the books you want.</h1>
          </div>
      <div className="flex justify-center pt-10">
        <div class="flex border text-base bg-gray-300 rounded-full py-3 px-6 shadow text-2xl">

                <AiOutlineSearch className="searchicon"/>
          <input type="text" class="w-full outline-none px-1  bg-gray-300" placeholder="search..." />
      </div>

    </div>

    <div className="flex justify-center pt-10 ">
      <div className="sem-select flex p-1 shadow text-2xl mr-24 rounded-full py-3 px-6 hover:text-gray-900 bg-gray-300"
      value={semState}
       onChange={(e)=>{
          const selectSem=e.target.value;

          setsemState(selectSem);

        }}>
      <select className="bg-gray-300">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      </select>

    </div>

    <div class="sem-select flex p-1 shadow text-xl mr-19 rounded-full py-3 px-6 hover:text-gray-900 bg-gray-300 " onChange={(e)=>{
        const branchSem=e.target.value;
        setbranchState(branchSem);
      }}>
    <select placeholder="select branch" className="bg-gray-300 width:300">

     <option value="grapefruit">CSE</option>
     <option value="lime">ISE</option>
     <option value="coconut">ECE</option>
     <option value="mango">EEE</option>
    <option value="grapefruit">ME</option>
    <option value="lime">CE</option>
    </select>
  </div>
    </div>
    <div>
      <Link to='/addPost.js'>
        <SiAddthis className="add"/>
      </Link>

    </div>

      </section>


    )
}

export default Library;
