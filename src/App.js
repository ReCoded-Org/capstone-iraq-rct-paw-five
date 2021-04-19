import React from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NavBar from './components/NavBar'
import AddPet from './components/AddPet/AddPet'
import ContacUS from './containers/ContactUs/ContactUs'
import ResourceCat from './components/ResourcePageCat/ResourceCat'
import ResourceDog from './components/ResourcePageDog/ResourceDog'
import Details from './components/DetailsPage/Details'
import MyPets from './containers/MyPets/MyPets'
import Footer from './components/Footer/Footer'
import ScrollToTop from './helpers/ScrollToTop'

import {
  HOME_ROUTE,
  ADOPT_ROUTE,
  ADD_APET_ROUTE,
  ABOUT_ROUTE,
  RESOURCE_CAT_ROUTE,
  RESOURCE_DOG_ROUTE,
  CONTACT_US_ROUTE,
  DETAILS_ROUTE,
  NOT_FOUND,
  MY_PETS,
} from './routes'
import './App.css'
import Home from './containers/Home/Home'
import NotFound from './components/NotFound/NotFound'
import AdoptionPage from './containers/adoptionPage'
import { fetchPetsInfo } from './redux/actions/pets'
import { fetchPetcomments } from './redux/comments/actions'

function App() {
  const dispatch = useDispatch()
  dispatch(fetchPetsInfo('.'))
  dispatch(fetchPetcomments())
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path={ADOPT_ROUTE} component={AdoptionPage} />
        <Route path={DETAILS_ROUTE} component={Details} />
        <Route path={ADD_APET_ROUTE} component={AddPet} />
        <Route path={ABOUT_ROUTE}>{/** <ABOUT_ROUTE/> */}</Route>
        <Route path={RESOURCE_CAT_ROUTE} component={ResourceCat} />
        <Route path={RESOURCE_DOG_ROUTE} component={ResourceDog} />
        <Route path={CONTACT_US_ROUTE} component={ContacUS} />
        <Route path={NOT_FOUND} component={NotFound} />
        <Route path={HOME_ROUTE} exact component={Home} />
        <Route path={MY_PETS} exact component={MyPets} />
        <Redirect to={NOT_FOUND} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
