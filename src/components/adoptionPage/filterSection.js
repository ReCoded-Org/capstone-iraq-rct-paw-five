import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { useTranslation } from 'react-i18next'
// import TopSection2 from './topSection2'
import Select from './select'
import { FilteredPets } from '../../redux/actions/pets'
/* eslint no-eval: 0 */

function FilterSection() {
  // const { t } = useTranslation()
  const { data, filters } = useSelector(state => state.pets)
  const dispatch = useDispatch()
  const globaleLang = useSelector(state => state.langReducer)
  const [dir, setDir] = useState('ltr')

  const changeDir = () => {
    if (globaleLang === 'en') {
      setDir('ltr')
    } else {
      setDir('rtl')
    }
  }

  useEffect(() => {
    changeDir()
  }, [globaleLang])

  const selections = {
    gender: ['Male', 'Female'],
    age: ['< 3 months', '> 3 months'],
    address: ['Mosul', 'Baghdad'],
  }

  const filter = () => {
    let filteredArray = data
    if (filters.gender) {
      if (filters.gender !== 'all')
        filteredArray = filteredArray.filter(
          item => item.gender === filters.gender
        )
    }
    if (filters.address) {
      if (filters.address !== 'all')
        filteredArray = filteredArray.filter(
          item => item.address === filters.address
        )
    }
    if (filters.age) {
      if (filters.age !== 'all')
        filteredArray = filteredArray.filter(item =>
          eval(item.age + filters.age.slice(0, 1) + 3)
        )
    }
    dispatch(FilteredPets(filteredArray))
  }

  return (
    <>
      {/* <TopSection2 className="" /> */}
      {/* <Container></Container> */}
      <Row fluid dir={dir} className="w-100 p-4  my-3 ">
        <Col className="col-12 d-flex justify-content-center">
          {Object.keys(selections).map(key => (
            <Select title={key} options={selections[key]} />
          ))}

          <button
            type="button"
            className="text-center text-white text-filter py-2 px-2 rounded bg-warning font-weight-bold "
            onClick={() => {
              filter()
            }}
          >
            <FontAwesomeIcon icon={faSearch} className="mx-3"/>
            {/* <i className="fa fa-search pr-3 text-warning" aria-hidden="true" /> */}
            {/* {t('adoption-page.filters.findAPet')} */}
          </button>
        </Col>
      </Row>
    </>
  )
}

export default FilterSection
