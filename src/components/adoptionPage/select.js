import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { PropTypes } from 'prop-types'
import { setFilters } from '../../redux/actions/pets'

function Select({ title, options }) {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handelChange = e => {
    dispatch(
      setFilters(e.target.name.toLowerCase(), e.target.value.toLowerCase())
    )
  }

  return (
    <>
      <select
        name={title}
        className=" text-center btn_width  py-2 px-4 rounded bg-white font-weight-bold "
        onChange={handelChange}
      >
      <option  value="" selected style={{display:'none'}}> {t(`adoption-page.filters.${title}`)} </option>
        {options.map(option => (
          <option value={option}>{option}</option>
        ))}
        <option value="all">All</option>
      </select>
    </>
  )
}

export default Select

Select.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf,
}

Select.defaultProps = {
  title: '',
  options: [],
}
