import React from 'react'
import NavBar from '../../assets/Navbar'
import AnnouncmentTitle from './AnnouncmenstTitle'
import AnnouncmentCard from './AnnouncmentCard'
import DiscussionsTitle from './DiscussionsTitle'
import DiscussionsContent from './DiscussionsContent'
export default function Home() {
    return(
        <div>
        <NavBar /> 
        <AnnouncmentTitle />
        <AnnouncmentCard />
        <DiscussionsTitle />
        <DiscussionsContent />

        </div>
    )

}