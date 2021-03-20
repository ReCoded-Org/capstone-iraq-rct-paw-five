import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/">{/**<Home/> */}</Route>
        <Route path="/AdoptionPage">{/**<AdoptionPage/> */}</Route>
        <Route path="/ResourcePage">{/**<ResourcePage/> */}</Route>
        <Route path="/Aboutus">{/**<Aboutus/> */}</Route>
        <Route path="/DetailsPage">{/**<DetailsPage/> */}</Route>
        <Route path="/ContactUs">{/**<ContactUs/> */}</Route>
        <Route path="/Login">{/**<Login/> */}</Route>
        <Route path="/Signup">{/**<Signup/> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
