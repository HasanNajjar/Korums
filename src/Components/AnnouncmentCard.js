import React, { useState }from 'react'
import AnnouncmentsData from '../Data/AnnouncmentsData'

export default function AnnouncmentCard() {
    const [announcments, getAnnouncments] = useState(AnnouncmentsData)

    return( 
        <div class="bg-gray-100">
        <div class="container mx-auto">
        <div class="Cards bg-gray-100 p-1">
        <nav class="flex flex-row">

        {announcments.map(announcment => <div key={announcment.id}>
            <div class="bg-gray-200 max-w-sm rounded overflow-hidden shadow-2xl mx-5 ">
            <div class="px-4 py-2 h-40 overflow-hidden">
            <div class="font-semibold text-lg mb-2">
            {announcment.Title}
            </div>
            <p class="text-gray-700 text-base">
            {announcment.Body} 
            </p>
            </div>
            <div class="px-5 py-2 bg-gray-300">
            <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> 24/02/20
            </span>
            <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {announcment.Comments} Comments
            </span>
            <span class="inline-block  px-7 py-1 text-sm font-semibold text-gray-700 mr-3">Share</span>
            </div>
            </div>
            </div>
              )}
      </nav>
      </div>
      </div>
      </div>
    )
}


/* <div>
<nav class="flex items-center justify-between flex-wrap bg-gray-300 p-1">
<div class="flex items-center flex-shrink-0 text-black mr-6">
  <span class="font-bold text-xl tracking-wider mx-2">Announcments</span>
</div>
<div class="block lg:hidden">
</div>
<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  <div class="text-sm lg:flex-grow">
  </div>
  <div>
  <a href="#" class="inline-block text-sm px-4 py-2 mr-2 leading-none border rounded text-black
   border-black hover:border-transparent hover:text-black hover:bg-green-500 mt-4 lg:mt-0">
  Next </a>
</div>
  </div>
</nav>
</div> */