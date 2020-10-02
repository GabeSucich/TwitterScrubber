import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from "./pages/Home/Home"
// import {UserProvider} from "./utils/UserState"
import API from "./utils/API"

function App() {
  
  API.getUserInfo().then(function(user) {
    if (!user) {
      console.log("urdadmadlmao")
    }
  })

  return (
    <UserProvider>
      <Home></Home>
    </UserProvider>
  );
}


export default App;
