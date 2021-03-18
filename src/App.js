import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
