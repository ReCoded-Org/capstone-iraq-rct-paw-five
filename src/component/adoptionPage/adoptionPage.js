import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { setPetsInfo, setLoading } from '../../redux/actions/pets'
import './style.css'
import ListPets from './listCards'
import Pagination from './pagination'
import firebase from '../../firebase'
import FilterSection from './filterSection'

function AdoptionPage() {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.pets)
  const petsRef = firebase.firestore().collection('pets')

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

export default AdoptionPage
