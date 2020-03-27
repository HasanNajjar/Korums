import React from 'react'

export default function AnnouncmentCard() {
    return (

        <div class="container mx-8 py-2">
        <div class="bg-gray-200 max-w-sm rounded overflow-hidden shadow-2xl mx-3">
        <div class="px-4 py-2">
          <div class="font-semibold text-lg mb-2">Does anyone think that X is overpowered?</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-5 py-2 bg-gray-300">
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">27/03/2020</span>
          <span class="inline-block  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">24 Comments</span>
          <span class="inline-block  px-7 py-1 text-sm font-semibold text-gray-700 mr-3">Share</span>
        </div>
       </div>
       </div>
    )
}