import React, { useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPets, setPostPerPage } from '../../redux/actions/pets'
import PetCard from './petCard'

function ListPets() {
  const dispatch = useDispatch()
  const { currentPets, currentPage, postPerPage, filteredPets } = useSelector(
    state => state.pets
  )
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = filteredPets.slice(indexOfFirstPost, indexOfLastPost)
    dispatch(setCurrentPets(currentPosts))

    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    if (width <= 569) {
      dispatch(setPostPerPage(2))
    }
    if (width > 582 && width <= 982) {
      dispatch(setPostPerPage(4))
    }
    if (width > 982) {
      dispatch(setPostPerPage(6))
    }
  }, [currentPage, postPerPage, width, filteredPets])

  return (
    <>
      <ul className="d-flex justify-content-center flex-wrap width p-0 m-0">
        {currentPets.map(pet => (
          <Col className="px-4 px-sm-1 px-md-1 col-10 col-sm-6  col-md-6 col-lg-4">
            <PetCard pet={pet} />
          </Col>
        ))}
      </ul>
    </>
  )
}

export default ListPets
