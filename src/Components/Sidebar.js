import React from 'react'


import { 
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom"

export default function Sidebar() {
    return(
        <div class="flex md:flex-row-reverse flex-wrap">

        <div class="w-full md:w-4/5 bg-gray-100">
           <div class="container bg-gray-100 pt-16 px-6">
              
           </div>
        </div>


        <div class="w-full md:w-48 bg-gray-900 md:bg-gray-800 px-2 text-center fixed bottom-0 
        md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 md:border-gray-600">

        <Router>
           <div class="md:relative mx-auto lg:float-left lg:px-6">
              <ul class="list-reset flex flex-row md:flex-col text-center md:text-left ">
                 <li class="mr-2 flex-1">
                    <Link to="/Dashboard" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                    </Link>
                    <i class="fas fa-link pr-0 md:pr-3"></i>
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                    Dashboard</span>
                 </li>
                 <li class="mr-3 flex-1">
                    <Link to="/Products" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                    </Link>
                    <i class="fas fa-link pr-0 md:pr-3"></i>
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                    Menu</span>
                 </li>
                 <li class="mr-3 flex-1">
                    <Link to="/Dashboard" class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600">
                    </Link>
                    <i class="fas fa-link pr-0 md:pr-3 text-pink-500"></i>
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                    Recipes</span>
                 </li>
                 <li class="mr-3 flex-1">
                    <Link to="/Dashboard" class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500">
                    </Link>
                    <i class="fas fa-link pr-0 md:pr-3"></i>
                    <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                    Products</span>
                 </li>
              </ul>

           </div>
           </Router>
        </div>
     </div>
    )
}