import React from 'react'
import NavBar from '../../assets/Navbar'
import AnnouncmentTitle from './AnnouncmentTitle'
import AnnouncmentCard from './AnnouncmentCard'

export default function Home() {
    return(
        <div>
        <NavBar /> 
        <AnnouncmentTitle />
        <AnnouncmentCard />
        </div>
    )

}