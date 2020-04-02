import React from 'react'
import Home from './Components/Home/Home'
import Announcments from './Components/Announcments/Announcments'
import Discussions from './Components/Discussions/Discussions'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom"

function App() {

       
    return (
        <Router>
        <Switch>
             <Route path="/" exact>
             <Home />   </Route>
        </Switch>
        <Switch>
             <Route path="/announcments" exact>
             <Announcments />   </Route>
        </Switch>
        <Switch>
              <Route path="/discussions" exact> 
              <Discussions />  </Route>
        </Switch>
        <Switch>
              <Route path="/login" exact> 
              <Login />  </Route>
        </Switch>  
        <Switch>
              <Route path="/register" exact> 
              <Register />  </Route>
        </Switch>
        </Router>
        )
}

export default App
