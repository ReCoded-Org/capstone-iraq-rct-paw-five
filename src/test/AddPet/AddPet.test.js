import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AddPet from '../../components/AddPet'
import AllReducers from '../../redux/reducers/AllReducers'

it('renders correctly', () => {
  const store = createStore(AllReducers)

  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <AddPet />
        </Router>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
