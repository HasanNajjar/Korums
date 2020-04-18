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
      <span class="text-2xl font-semibold">Title: {titles.Title}</span>      <span>Posted to: {titles.PostedTo} </span>
      <br/><br/>
      <span class="text-lg font-medium break-words"> Body: {titles.Body}</span> <br/><br/>

      {/* Comments form */}
      <form >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="comment">
          Post a comment
        </label>
        <input class="bg-gray-100 shadow appearance-none border rounded w-full py-2 px-3 pt-4 pb-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="comment" type="text" placeholder="Comment">
     
        </input>
        <button class="mt-3 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
      </div>
      </form>

      <span class="block text-gray-700 text-sm font-bold mb-2">Comments:   
      </span><br/> 
      {titles.Comments.map(comm => (
        <>
        <div class="bg-gray-100 container pt-4 pb-4 shadow-md rounded">
      <div  class="text-md font-semibold"> Username: {comm.Username}  <br/>
      His comment: {comm.Comment}
      </div>
      </div><br/>
        </>
      ))} 
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
  const {id} = match.params
      return (
      <div>
        {/* fetching... {id} */}
        {discussion.find(item => item._id == id) ? displayItems(id) : errorMessage  }
      </div>
    );
  }


