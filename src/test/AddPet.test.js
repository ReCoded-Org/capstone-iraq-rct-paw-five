import React from 'react'
import renderer from 'react-test-renderer'

import AddPet from '../components/AddPet'

it('renders correctly', () => {
  const tree = renderer.create(<AddPet />).toJSON()
  expect(tree).toMatchSnapshot()
})
