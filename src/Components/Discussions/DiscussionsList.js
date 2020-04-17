import React from 'react'
import {NavLink} from 'react-router-dom'


export function DiscussionsList({ discussion }){
  return(
    <>
    <div class=" w-1/3">
    <div class= "flex  flex-col">
      {discussion.map(item => {
        return(
          <div class="flex flex-col">
          <div class="pt-1 px-1 pb-1 h-full bg-gray-100  ">
          <div class="hover:shadow-2xl cursor-pointer shadow-xl ">
          <div class="flex flex=col overflow-hidden ">
          <NavLink to={`/discussions/${item._id}`} activeStyle={{backgroundColor: '#63b3ed'}}>
          <div class=" text-gray-700 bg-gray-200  px-1 pl-1 m-1 overflow-hidden shadow-lg mx-1 font-semibold hover:shadow-2xl">
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
        )
      }
    )
  }
    </div>
    </div>
    </>
 )
}
