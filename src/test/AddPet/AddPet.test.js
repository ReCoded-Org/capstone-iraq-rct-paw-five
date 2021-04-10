import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AddPet from '../../components/AddPet'
import AllReducers from '../../redux/reducers/AllReducers'

it('renders correctly', () => {
  const store = createStore(AllReducers)

  const tree = renderer
    .create(
      <Provider store={store}>
        <AddPet />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
