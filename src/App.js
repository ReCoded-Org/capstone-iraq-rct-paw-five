import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {
 
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact>{/** <Home/> */}</Route>
        <Route path="/Adopt" exact>{/** <AdoptionPage/> */}</Route>
        <Route path="/ResourcePage" exact>{/** <ResourcePage/> */}</Route>
        <Route path="/areeg" exact>{/** <Aboutus/> */}</Route>
        <Route path="/DetailsPage" exact>{/** <DetailsPage/> */}</Route>
        <Route path="/ContactUs" exact>{/** <ContactUs/> */}</Route>
        <Route path="/Login" exact>{/** <Login/> */}</Route>
        <Route path="/Signup" exact>{/** <Signup/> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
