import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from '../../assets/Navbar'
import DiscussionsData from '../../Data/DiscussionsData'
import {DiscussionsList} from './DiscussionsList'

const discussion = DiscussionsData

export default function Routing() {
 return(
  <>
   <Navbar />
  <Router>
    <Switch>
      <Route exact path="/discussions" component={DisplayDiscussions} />
      <Route path="/discussions/:id" component={DiscussionsContent} />
    </Switch>
  </Router>
  </>
 )
}


function DisplayDiscussions() {
  return(
  <div> 
    <DiscussionsList key={discussion._id} discussion={discussion} />
  </div>
  )
}
function displayItems(id) {
  return(
    <>
    <div class="flex flex-row">

    {discussion.filter(discussion => discussion._id == id ).map(titles => (
      <>
      <DiscussionsList key={discussion._id} discussion={discussion} />
      <div class=" ml-3 mt-2 w-3/5"> 
      <span>Title: {titles.Title}</span> <br/><br/>
      <span> Body: {titles.Body}</span> <br/><br/>
      <span>Posted to: {titles.PostedTo} </span> <br/> <br/>
      <span>Comments: <br/> {titles.Comments.map(comm => (
        <>
        Username: {comm.Username} <br/>
        His comment: {comm.Comment} <br/>
        </>
      ))} </span>


      </div>
     </>
    ))}
          </div>

    </>
  )
}

function DiscussionsContent(props) {
  const {match} = props 
  const errorMessage = "Failed to display items"
  let {id} = match.params
      return (
      <div>
        {/* fetching... {id} */}
        {discussion.find(item => item._id == id) ? displayItems(id) : errorMessage  }
      </div>
    );
  }


