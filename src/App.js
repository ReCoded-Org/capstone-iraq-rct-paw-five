import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ContactUs from './container/ContactUs/ContactUs';

function App() {
 
  return (
    <Router>
      <Switch>
       <ContactUs/>
      </Switch>
    </Router>
  );
}

export default App;
