import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import TopSection2 from './topSection2'
import Select from './select'
import { FilterPets } from '../../redux/actions/pets'

function FilterSection() {
  const { t } = useTranslation()
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

  return (
    <>
      <Col className="col-12 p-0 position-relative">
        <TopSection2 className="" />
        <div
          dir={dir}
          className="w-100 px-lg-5 position-absolute top-50 d-flex flex-wrap align-self-center justify-content-around align-items-center"
          style={{ height: '6rem' }}
        >
          {Object.keys(selections).map(key => (
            <Select title={key} options={selections[key]} />
          ))}

          <button
            type="button"
            className="py-2 px-4 rounded btn_width bg-white font-weight-bold"
            onClick={() => {
              dispatch(FilterPets(data, filters))
            }}
          >
            <i className="fa fa-search pr-3 text-warning" aria-hidden="true" />
            {t('adoption-page.filters.findAPet')}
          </button>
        </div>
      </Col>
    </>
  )
}

export default FilterSection
