import React from 'react'
import NavBar from '../../assets/Navbar'
import AnnouncmentTitle from './AnnouncmenstTitle'
import DiscussionsTitle from './DiscussionsTitle'
import DiscussionsContent from './DiscussionsContent'
import AnnouncmentCards from './AnnouncmentCards'

export default function Home() {
    return(
        <div>

        <NavBar /> 
        <AnnouncmentTitle />
        <AnnouncmentCards />
         <DiscussionsTitle />
        <DiscussionsContent />

        </div>
    )

}
//  <AnnouncmentCard />
