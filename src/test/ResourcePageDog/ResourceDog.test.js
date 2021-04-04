import React from 'react'
import renderer from 'react-test-renderer'
import Resource from '../../components/ResourcePageDog/ResourceDog'

it('renders correctly', () => {
  const tree = renderer.create(<Resource />).toJSON()
  expect(tree).toMatchSnapshot()
})
