import React, { Component } from "react";
import Application from "./Application"
import API from "./utils/API"
import {UserProvider} from "./utils/UserState"

function App() {
  
  API.getUserInfo().then(function(user) {
    if (!user) {
      console.log("urdadmadlmao")
    }
  })

  return (
    <UserProvider>
      <Application/>
    </UserProvider>
  );
}


export default App;
