import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Details from '../../components/DetailsPage/Details'
import AllReducers from '../../redux/reducers/AllReducers'

const store = createStore(AllReducers)

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Details match={{ params: 'temp' }} />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
