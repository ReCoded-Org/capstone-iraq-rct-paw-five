import React from 'react'
import renderer from 'react-test-renderer'
import AddPetForm from './../../components/AddPet/AddPetForm'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AddPetForm
        handleSubmit
        setFieldValue
        file
        handleChange
        handleBlur
        values
        errors
        touched
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
