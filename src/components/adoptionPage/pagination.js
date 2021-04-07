import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions/pets'
import arrowRight from './arrowRight.svg'
import arrowLeft from './arrowLeft.svg'

function Pagination() {
  const { data, currentPage, postPerPage } = useSelector(state => state.pets)
  const dispatch = useDispatch()
  const totalPets = data.length

  return (
    <>
      <div className="position-absolute space">
        <button
          type="button"
          className="hidden_border btn_bg"
          onClick={() =>
            currentPage > 1 ? dispatch(setCurrentPage(currentPage - 1)) : null
          }
        >
          <img
            src={arrowLeft}
            alt="React Logo"
            style={{ width: '30px', height: '30px' }}
          />
        </button>

        <button
          type="button"
          className="hidden_border btn_bg p-0"
          onClick={() =>
            currentPage <= Math.ceil(totalPets / postPerPage) - 1
              ? dispatch(setCurrentPage(currentPage + 1))
              : null
          }
        >
          <img
            src={arrowRight}
            alt="React Logo"
            style={{ width: '30px', height: '30px' }}
          />{' '}
        </button>
      </div>
    </>
  )
}

export default Pagination
