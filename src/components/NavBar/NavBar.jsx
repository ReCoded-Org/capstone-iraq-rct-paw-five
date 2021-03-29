import React, { useState, useEffect } from 'react'
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import {
    HOME_ROUTE,
    ADOPT_ROUTE,
    ABOUT_ROUTE,
    RESOURCE_CAT_ROUTE,
    RESOURCE_DOG_ROUTE,
    LOGIN_ROUTE,
    CONTACT_US_ROUTE,
} from '../../routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.ico'

export default function NavBar() {
    const { t } = useTranslation()
    const [dirProperties, setDir] = useState({
        dir: 'ltr',
        className: 'ml-auto',
    })

    const selectedLanguage = (lang) => {
        i18next.changeLanguage(lang)
    }
    const handelOption = (e) => {
        selectedLanguage(e.target.value)
    }

    const handelDir = () => {
        if (localStorage.getItem('i18nextLng') !== 'en') {
            const newDir = 'rtl'
            const newClassName = 'mr-auto'
            const newdirProperties = { ...dirProperties }
            newdirProperties.dir = newDir
            newdirProperties.className = newClassName
            setDir(newdirProperties)
        } else {
            const newDir = 'ltr'
            const newClassName = 'ml-auto'
            const newdirProperties = { ...dirProperties }
            newdirProperties.dir = newDir
            newdirProperties.className = newClassName
            setDir(newdirProperties)
        }
    }

    useEffect(() => {
        handelDir()
    }, [localStorage.getItem('i18nextLng')])

    return (
        <div dir={dirProperties.dir} data-testid="NavBar">
            <Router>
                <Navbar className="navBar" expand="lg">
                    <Navbar.Brand className="logo" as={NavLink} to={HOME_ROUTE}>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={dirProperties.className}>
                            <Nav.Link
                                as={NavLink}
                                to={HOME_ROUTE}
                                activeClassName="selected"
                                exact
                            >
                                {t('navbar.home')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to={ABOUT_ROUTE}
                                activeClassName="selected"
                                exact
                            >
                                {t('navbar.about')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to={ADOPT_ROUTE}
                                RESOURCE_CAT_ROUTE
                                activeClassName="selected"
                                exact
                            >
                                {t('navbar.adopt')}
                            </Nav.Link>
                            <NavDropdown
                                className="drop"
                                title={t('navbar.resources.0')}
                            >
                                <NavDropdown.Item
                                    as={NavLink}
                                    activeClassName="selected"
                                    exact
                                    to={RESOURCE_CAT_ROUTE}
                                >
                                    {t('navbar.resources.1')}
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    as={NavLink}
                                    activeClassName="selected"
                                    exact
                                    to={RESOURCE_DOG_ROUTE}
                                >
                                    {t('navbar.resources.2')}
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link
                                as={NavLink}
                                activeClassName="selected"
                                exact
                                to={CONTACT_US_ROUTE}
                            >
                                {t('navbar.contact')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                activeClassName="selected"
                                exact
                                to={LOGIN_ROUTE}
                            >
                                {t('navbar.logIn')}
                            </Nav.Link>
                            <Nav.Link className="fa">
                                <Form.Control
                                    className="selectLang"
                                    onChange={handelOption}
                                    as="select"
                                    size="sm"
                                    custom
                                    value=""
                                >
                                    <option selected className="firstOption fa">
                                        &#xf1ab;
                                    </option>
                                    <option value='en'>English</option>
                                    <option value='ar'>عربي</option>
                                    <option value='kr'>كردى</option>
                                </Form.Control>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Router>
        </div>
    )
}
