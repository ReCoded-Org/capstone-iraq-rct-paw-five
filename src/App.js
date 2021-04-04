import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AddPet from './components/AddPet/AddPet'
import ContacUS from './containers/ContactUs/ContactUs'
import ResourceCat from './components/ResourcePageCat/ResourceCat'
import ResourceDog from './components/ResourcePageDog/ResourceDog'
import {
  HOME_ROUTE,
  ADOPT_ROUTE,
  ADD_APET_ROUTE,
  ABOUT_ROUTE,
  RESOURCE_CAT_ROUTE,
  RESOURCE_DOG_ROUTE,
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  CONTACT_US_ROUTE,
} from './routes'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path={`${ADOPT_ROUTE}/:id`} exact>
          {/** <ADOPT_ROUTE/> */}
        </Route>
        <Route path={ADOPT_ROUTE}>{/** <ADOPT_ROUTE/> */}</Route>
        <Route path={ADD_APET_ROUTE}>
          {' '}
          <AddPet />{' '}
        </Route>
        <Route path={ABOUT_ROUTE}>{/** <ABOUT_ROUTE/> */}</Route>
        <Route path={LOGIN_ROUTE}>{/** <LOGIN_ROUTE/> */}</Route>
        <Route path={SIGNUP_ROUTE}>{/** <SIGNUP_ROUTE/> */}</Route>
        <Route path={RESOURCE_CAT_ROUTE} component={ResourceCat}>
          {/** <RESOURCE_CAT_ROUTE/> */}
        </Route>
        <Route path={RESOURCE_DOG_ROUTE} component={ResourceDog}>
          {/** <RESOURCE_DOG_ROUTE/> */}
        </Route>
        <Route path={CONTACT_US_ROUTE} component={ContacUS}>
          {/** <CONTACT_US_ROUTE/> */}
        </Route>
        <Route path={HOME_ROUTE} exact component={Home}>
          {/** <HOME_ROUTE/> */}
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
