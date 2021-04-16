import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'
import MyPets from '../../containers/MyPets/MyPets'
import AllReducers from '../../redux/reducers/AllReducers'
const store = createStore(AllReducers, applyMiddleware(thunk))

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <MyPets store={store} />
        </Router>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
