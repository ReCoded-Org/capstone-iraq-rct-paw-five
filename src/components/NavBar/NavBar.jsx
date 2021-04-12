import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Dropdown, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { NavLink, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { selectedLang } from '../../redux/actions/actions'
import Login from '../Modals/Login/Login'
import {
  HOME_ROUTE,
  ADOPT_ROUTE,
  ABOUT_ROUTE,
  RESOURCE_CAT_ROUTE,
  RESOURCE_DOG_ROUTE,
  ADD_APET_ROUTE,
  CONTACT_US_ROUTE,
  MY_PETS,
} from '../../routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.ico'
import firebase from '../../firebase'
import userStatus,{setUserInfo} from '../../redux/actions/user'

export default function NavBar() {
  const globaleLang = useSelector(state => state.langReducer)
  const userState = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const [dirProperties, setDir] = useState({
    dir: 'ltr',
    className: 'ml-auto',
    textDir: 'text-left',
  })
  const [showLoginModal, setShowLoginModal] = useState(false)
  // check the user if loggedin or not
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(userStatus(true))
       dispatch(setUserInfo({ name: user.displayName, uid: user.uid }))
      } else {
        dispatch(userStatus(false))
      }
    })
  }, [])

  const handelLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(userStatus(false))

        Redirect('/')
      })
      .catch(() => {})
  }

  const selectedLanguage = lang => {
    i18next.changeLanguage(lang)
  }
  const handelOption = e => {
    localStorage.setItem('lang', e.target.value)
    dispatch(selectedLang(e.target.value))
    selectedLanguage(e.target.value)
  }

  const handelDir = () => {
    if (
      localStorage.getItem('lang') !== 'en' &&
      localStorage.getItem('lang') !== null
    ) {
      const newDir = 'rtl'
      const newClassName = 'mr-auto'
      const newtextDir = 'text-right'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.className = newClassName
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    } else {
      const newDir = 'ltr'
      const newClassName = 'ml-auto'
      const newtextDir = 'text-left'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.className = newClassName
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    }
  }

  useEffect(() => {
    handelDir()
  }, [globaleLang])

  return (
    <div dir={dirProperties.dir}>
      <Navbar
        className={`theme-color ${dirProperties.textDir} p-0 border-0 `}
        expand="lg"
      >
        <Navbar.Brand as={NavLink} to={HOME_ROUTE}>
          <img
            src={logo}
            className="ml-1 mr-1"
            width="55px"
            height="55px"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 text-light">
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav className={` text-light  ${dirProperties.className}`}>
            <Nav.Link
              as={NavLink}
              to={HOME_ROUTE}
              activeStyle={{
                fontWeight: 'bold',
                borderBottom: '2px solid white',
              }}
              exact
              className="m-3  p-0 text-light"
            >
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={ABOUT_ROUTE}
              activeStyle={{
                fontWeight: 'bold',
                borderBottom: '2px solid white',
              }}
              exact
              className="m-3 p-0 text-light"
            >
              {t('navbar.about')}
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to={ADOPT_ROUTE}
              RESOURCE_CAT_ROUTE
              activeStyle={{
                fontWeight: 'bold',
                borderBottom: '2px solid white',
              }}
              exact
              className="m-3 p-0 text-light"
            >
              {t('navbar.adopt')}
            </Nav.Link>
            {userState ? (
              <Nav.Link
                as={NavLink}
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                }}
                exact
                to={ADD_APET_ROUTE}
                className="m-3 p-0 text-light"
              >
                {t('navbar.addapet')}
              </Nav.Link>
            ) : (
              ''
            )}
            <Dropdown>
              <Dropdown.Toggle className="text-light bg-transparent shadow-none  border-0 p-0 m-3 ">
                {t('navbar.resources.0')}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  className="text-danger bg-light"
                  as={NavLink}
                  to={RESOURCE_DOG_ROUTE}
                >
                  {t('navbar.resources.2')}
                </Dropdown.Item>
                <Dropdown.Item
                  className="text-danger bg-light"
                  as={NavLink}
                  to={RESOURCE_CAT_ROUTE}
                >
                  {t('navbar.resources.1')}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link
              as={NavLink}
              activeStyle={{
                fontWeight: 'bold',
                borderBottom: '2px solid white',
              }}
              exact
              to={CONTACT_US_ROUTE}
              className="m-3 p-0 text-light"
            >
              {t('navbar.contact')}
            </Nav.Link>

            {userState ? (
              <Nav.Link
                as={NavLink}
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                }}
                exact
                to={MY_PETS}
                className="m-3 p-0 text-light"
              >
                {t('navbar.mypets')}
              </Nav.Link>
            ) : (
              ''
            )}

            {userState ? (
              <Nav.Link
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                }}
                style={{ border: 'none', background: 'none' }}
                className="m-3 p-0 text-light"
                onClick={handelLogout}
              >
                {' '}
                {t('navbar.logOut')}
              </Nav.Link>
            ) : (
              <Nav.Link
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                }}
                className="m-3 p-0 text-light"
                onClick={() => {
                  setShowLoginModal(!showLoginModal)
                }}
              >
                {t('navbar.logIn')}
              </Nav.Link>
            )}
            <Form.Control
              className=" fa   m-3 text-light text-danger shadow-none bg-transparent  border-0 "
              onChange={handelOption}
              as="select"
              size="sm"
              custom
              value=""
              style={{ maxWidth: '50px' }}
            >
              <option style={{ display: 'none' }} className="fas p-0">
                &#xf1ab;
              </option>
              <option className="text-danger" value="en">
                English
              </option>
              <option className="text-danger" value="ar">
                عربي
              </option>
              <option className="text-danger" value="kr">
                كوردى
              </option>
            </Form.Control>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </Router> */}
      {showLoginModal ? (
        <Login
          onHide={() => {
            setShowLoginModal(!showLoginModal)
          }}
        />
      ) : null}
    </div>
  )
}
