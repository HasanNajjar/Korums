import React from 'react'
import {NavLink} from 'react-router-dom'


export function DiscussionsList({ discussion }){
  return(
    <>
    <div class=" w-1/3">
    <div class= "flex  flex-col">
      {discussion.map(item => {
        return(
          <div class="flex flex-col px-2 ">
          <div class="pt-1 px-1 pb-1 h-full bg-purple-100 pr-4  ">
          <div class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ...">
          <div class="hover:shadow-2xl cursor-pointer shadow-md ">
          <div class="flex flex=col overflow-hidden  ">
          <NavLink to={`/discussions/${item._id}`} activeStyle={{backgroundColor: 'rgba(99,179,237,0.45)',
                                                                 opacity: '0.85'}}>
          <div class=" text-gray-700 bg-gray-100  px-1 pl-1 m-1 overflow-hidden shadow-md mx-1 font-semibold hover:shadow-2xl">
           {item._id} {item.Title}
            <span class="m-6 font-medium">
            <span class="">Posted To: </span>{item.PostedTo}
            </span>
            </div>
           </NavLink>
          </div>
          </div>
          </div>
          </div>
          </div> 
        )
      }
    )
  }
    </div>
    </div>
    </>
 )
}
