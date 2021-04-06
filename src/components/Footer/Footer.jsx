import React, { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faMobile,
  faEnvelope,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.svg'
import {
  HOME_ROUTE,
  ADOPT_ROUTE,
  ABOUT_ROUTE,
  ADD_APET_ROUTE,
  RESOURCE_CAT_ROUTE,
  RESOURCE_DOG_ROUTE,
  LOGIN_ROUTE,
  CONTACT_US_ROUTE,
} from '../../routes'

export default function Footer() {
  const globaleLang = useSelector(state => state.langReducer)
  const { t } = useTranslation()
  const [dir, setDir] = useState('ltr')

  const changeDir = () => {
    if (
      localStorage.getItem('lang') !== 'en' &&
      localStorage.getItem('lang') !== null
    ) {
      setDir('rtl')
    } else {
      setDir('ltr')
    }
  }

  useEffect(() => {
    changeDir()
  }, [globaleLang])

  return (
    <div dir={dir} style={{ backgroundColor: '#F2F2F1' }}>
      <Container>
        <Row>
          <Col className="text-center pt-5" lg={4} md={6}>
            <Image src={logo} rounded width="64px" height="64px" />
            <p className="text-dark">{t('footer.pageDescription')}</p>
            <Container fluid>
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-danger ml-2 mr-2"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-danger ml-2 mr-2"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-danger ml-2 mr-2"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-danger ml-2 mr-2"
              />
            </Container>
          </Col>
          <Col className="text-center" lg={4} md={6}>
            <h5 className="pt-5" align="center">
              {t('footer.explorLinks')}
            </h5>
            <Container fluid className="">
              <div className="list-unstyled row text-center">
                <li className="col-6 p-2 ">
                  <NavLink to={HOME_ROUTE} className="text-dark">
                    {t('navbar.home')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={ABOUT_ROUTE} className="text-dark">
                    {t('navbar.adopt')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={ADOPT_ROUTE} className="text-dark">
                    {t('navbar.about')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={ADD_APET_ROUTE} className="text-dark">
                    {t('navbar.addapet')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={RESOURCE_CAT_ROUTE} className="text-dark">
                    {t('navbar.resources.1')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={RESOURCE_DOG_ROUTE} className="text-dark">
                    {t('navbar.resources.2')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={CONTACT_US_ROUTE} className="text-dark">
                    {t('navbar.contact')}
                  </NavLink>
                </li>
                <li className="col-6 p-2">
                  <NavLink to={LOGIN_ROUTE} className="text-dark">
                    {t('navbar.logIn')}
                  </NavLink>
                </li>
              </div>
            </Container>
          </Col>
          <Col className="m-auto" lg={4} md={6}>
            <h5 className="pt-5" align="center">
              {t('footer.contactInfo')}
            </h5>
            <Container fluid className="text-center">
              <li className="m-3 list-unstyled text-dark">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className=" text-danger ml-2 mr-2"
                />
                {t('footer.cites')}{' '}
              </li>
              <li className="m-3 list-unstyled  text-dark">
                <FontAwesomeIcon
                  icon={faMobile}
                  className=" text-danger ml-2 mr-2"
                />

                {t('footer.phoneNo')}
              </li>
              <li className="m-3 list-unstyled text-dark">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-danger  ml-2 mr-2"
                />
                {t('footer.email')}
              </li>
              <li className="m-3 list-unstyled text-dark">
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="text-danger ml-2 mr-2"
                />

                {t('footer.workTime')}
              </li>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container className="theme-color text-center p-3 text-light" fluid>
        <h6>&#169; {t('footer.copyright')}</h6>
      </Container>
    </div>
  )
}
