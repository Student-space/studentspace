import React from 'react'
import {Link} from 'react-router-dom'

function Library() {
    return (
        <section className="text-gray-700 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          
          <div class="p-8">
            <div class="bg-white flex items-center rounded-full shadow-xl">
         <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
    
         <div class="p-4">
        <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
            icon
        </button>
        </div>
        </div>
            </div>
        </div>
           
           
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
        </div>
      </section>
    )
}

export default Library

