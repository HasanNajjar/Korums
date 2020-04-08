import React from 'react'
import DiscussionsData from '../../Data/DiscussionsData'

const Data = DiscussionsData

export default function Sidebar(){
return(
     Data.map(item => {
        return(
    <div>
    <div class="pt-2 w-1/3 h-full bg-gray-100">
    <div class="flex flex-col overflow-hidden">
    <div class="text-gray-700 bg-gray-200 px-1 pl-1 m-1 overflow-hidden shadow-xl mx-1 font-semibold">{item.Title.slice(0,100)} 
    <span class=" m-10 font-medium"> 
    {item.PostedTo}
    </span>
    <div class="text-gray-700 bg-gray-200 px-1 py-1 m-1 overflow-hidden font-normal">{item.Body}
    </div>
    </div>
    </div>
    </div>
    </div>
        )
    }
    )
)
}