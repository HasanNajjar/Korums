import React, { useState } from 'react'
import Modal from 'react-modal'
import AnnouncmentsData from '../../Data/AnnouncmentsData'

export default function AnnouncmentsModal() {
    const [modal, showModal] = useState(false)
    const Data = AnnouncmentsData
    
    function OpenModel () {
      showModal(true) 
      } 
      
    
    function CloseModal () {
        showModal(false)
    }
    
    return(
      Data.map(item => {
        return(
          <div key ={item.id}>
          <div class="Cards bg-gray-200 p-3 pb-3 ">
            <button onClick={()=> OpenModel(item.id)}>   
            <div class="bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg mx-5">
            <div class="px-4 py-2 h-40 min-w-full overflow-hidden">
            <div class="font-semibold text-lg mb-2 ">
                  {item.Title}
                  </div>
                  <span class="text-gray-700 text-base">
                  {item.Body}
                  </span>
                  </div>
                  <div class="px-5 py-2 bg-purple-300 flex">
                  <span class="inline-block  px-1 py-1 text-sm font-semibold  mr-15 "> 24/02/20
                  </span>
                  <span class="inline-block  px-1 py-1 text-sm font-semibold">
                  comments
                  </span>
                  <span class="inline-block  px-1 py-1 text-sm font-semibold mr-9">
                  Comments </span>
                  <span class="inline-block  px-1 py-1 text-sm font-semibold mr-3">
                  Share </span>
                  </div>
                  </div>
                  </button> </div>
            <Modal 
               isOpen={modal}
               contentLabel="onRequestClose Example"
               onRequestClose={()=> CloseModal()}
               className="Modal"
               overlayClassName="Overlay">
               <div>
               {Data.map(mod => (
                 <>
                 <p class=" text-xl pt-2 font-bold" key={mod.id}> {mod.Title} </p>
                 <button onClick={()=> CloseModal()}>Close Modal</button>
                 </>
               ))}

              </div>
            </Modal>
          </div>
        )
      })

    )
}

  const props = {};
  