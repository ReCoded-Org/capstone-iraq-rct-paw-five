import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
import { setPetsInfo, setLoading } from '../redux/actions/pets'
import '../components/adoptionPage/style.css'
import ListPets from '../components/adoptionPage/listCards'
import Pagination from '../components/adoptionPage/pagination'
import firebase from '../firebase'
import FilterSection from '../components/adoptionPage/filterSection'

function AdoptionPage({ location }) {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.pets)
  console.log(location)

  let petsRef = null
  if (location.query) {
    if (
      location.query.city !== '' &&
      location.query.age !== '' &&
      location.query.type !== ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
        .where('species', '==', location.query.type)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.city !== '' &&
      location.query.age !== '' &&
      location.query.type === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.type !== '' &&
      location.query.age !== '' &&
      location.query.city === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.type !== '' &&
      location.query.city !== '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
        .where('city', '==', location.query.city)
    }

    if (
      location.query.type !== '' &&
      location.query.city === '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
    }

    if (
      location.query.type === '' &&
      location.query.city !== '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
    }

    if (
      location.query.type === '' &&
      location.query.city === '' &&
      location.query.age !== ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('age', '==', location.query.age)
    }
  }

  if (petsRef === null) {
    petsRef = firebase.firestore().collection('pets')
  }

  useEffect(() => {
    const fetchPetsInfo = () => {
      dispatch(setLoading(true))
      petsRef.onSnapshot(snapshot => {
        const petsArray = []
        snapshot.forEach(petDoc => {
          petsArray.push(petDoc.data())
        })
        dispatch(setPetsInfo(petsArray))
        dispatch(setLoading(false))
      })
    }
    fetchPetsInfo()
  }, [])

  return (
    <Container fluid className="gray_background">
      {loading ? (
        '...loading'
      ) : (
        <>
          <Row className="">
            <FilterSection />
          </Row>

          <Row className="h-50 d-flex justify-content-center position-relative">
            <ListPets className="" />
            <Pagination className="d-block" />
          </Row>
        </>
      )}
    </Container>
  )
}

AdoptionPage.propTypes = {
  location: PropTypes,
}

AdoptionPage.defaultProps = {
  location: {},
}

export default AdoptionPage
