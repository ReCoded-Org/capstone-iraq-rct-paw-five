import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Resources from './components/ResourcePage/Resources'
import {
    HOME_ROUTE,
    ADOPT_ROUTE,
    ABOUT_ROUTE,
    RESOURCE_CAT_ROUTE,
    RESOURCE_DOG_ROUTE,
    LOGIN_ROUTE,
    SIGNUP_ROUTE,
    CONTACT_US_ROUTE,
} from './routes'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path={ADOPT_ROUTE}>{/** <ADOPT_ROUTE/> */}</Route>
                <Route path={ABOUT_ROUTE}>{/** <ABOUT_ROUTE/> */}</Route>
                <Route path={LOGIN_ROUTE}>{/** <LOGIN_ROUTE/> */}</Route>
                <Route path={SIGNUP_ROUTE}>{/** <SIGNUP_ROUTE/> */}</Route>
                <Route path={RESOURCE_CAT_ROUTE}>
                    <Resources />
                </Route>
                <Route path={RESOURCE_DOG_ROUTE}>
                    {/** <RESOURCE_DOG_ROUTE/> */}
                </Route>
                <Route path={CONTACT_US_ROUTE}>
                    {/** <CONTACT_US_ROUTE/> */}
                </Route>
                <Route path={HOME_ROUTE} exact>
                    {/** <HOME_ROUTE/> */}
                </Route>
            </Switch>
        </Router>
    )
}

export default App
