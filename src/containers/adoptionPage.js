import React,{useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import { fetchPetsInfo } from '../redux/actions/pets'
import '../components/adoptionPage/style.css'
import ListPets from '../components/adoptionPage/listCards'
import Pagination from '../components/adoptionPage/pagination'
import FilterSection from '../components/adoptionPage/filterSection'

function AdoptionPage({ location }) {
  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.pets)


  useEffect(() =>
   dispatch(fetchPetsInfo(location))
  , [])

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
