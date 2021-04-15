import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { DETAILS_ROUTE } from '../../routes'
import Loadingg from '../Loading/Loading'

import './HomePetCard.css'

export default function PetCard({ pet }) {
  const globaleLang = useSelector(state => state.langReducer)

  const [dirProperties, setDir] = useState({
    dir: 'ltr',
    detailsBtn: 'float-right',
    gender: 'float-left',
    location: ['10px', '220px'],
  })

  const handelDir = () => {
    if (globaleLang === 'en' || globaleLang == null) {
      const newdirProperties = { ...dirProperties }

      newdirProperties.dir = 'ltr'
      newdirProperties.detailsBtn = 'float-right'
      newdirProperties.gender = 'float-left'
      newdirProperties.location[0] = '10px'
      newdirProperties.location[1] = '220px'
      setDir(newdirProperties)
    } else {
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = 'rtl'
      newdirProperties.detailsBtn = 'float-left'
      newdirProperties.gender = 'float-right'
      newdirProperties.location[0] = '10px'
      newdirProperties.location[1] = '10px'
      setDir(newdirProperties)
    }
  }

  useEffect(() => {
    handelDir()
  }, [globaleLang])

  return (
    <div dir="rtl">
      {/* <Loading/> */}
      {!pet.file ? (
        <Loadingg />
      ) : (
        <Card
          style={{ maxWidth: '360px', maxHeight: '591px' }}
          className="w-100 mx-lg-5 m-md-3 m-sm-1 card my-3 position-relative"
        >
          <Card.Img
            variant="top"
            src={`${pet.file}`}
            style={{ height: '14rem' }}
          />
          <span
            style={{
              top: dirProperties.location[0],
              left: dirProperties.location[1],
              backgroundColor: 'rgba(255, 255, 255, 0.466)',
              borderRadius: '15px',
            }}
            className="position-absolute p-1"
          >
            <FontAwesomeIcon
              className="petLocationIcon"
              icon={faMapMarkerAlt}
            />{' '}
            {pet.address}{' '}
          </span>
          <Card.Body>
            <Card.Title style={{ color: '#d18d28' }} align="center">
              {pet.petName}
            </Card.Title>
            <Card.Text align="center">
              {pet.story ? pet.story.substring(0, 80) : ''}
            </Card.Text>
            <span className={`${dirProperties.gender}`}>
              <FontAwesomeIcon className="petGenderIcon" icon={faMars} />{' '}
              <span className="p-1 text-danger">{pet.gender}</span>
            </span>
            <Button
              as={Link}
              to={`/details/${pet.id}`}
              className={`detailsBtn border-0 ${dirProperties.detailsBtn}`}
              variant="primary"
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

PetCard.propTypes = {
  pet: PropTypes.func,
}

PetCard.defaultProps = {
  pet: {},
}
