import React from 'react'
import Navbar from './assets/Navbar'
import AnnouncmentCard from './assets/AnnouncmentCard'
import Banner from './assets/Banner'
import AnnouncmentTitle from './assets/AnnouncmentTitle'

function App() {
    return (
        <div>
    <Navbar />
    <AnnouncmentTitle />
    <div class="Cards bg-gray-100">
    <div class="inline-block"> <AnnouncmentCard /> </div>
    <div class="inline-block"> <AnnouncmentCard /> </div>
    <div class="inline-block"> <AnnouncmentCard /> </div>
    </div> 
    </div>

    )
}

export default App
