import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../../containers/Home/Home'
import AllReducers from '../../redux/reducers/AllReducers'
const store = createStore(AllReducers)

describe('navbar', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home store={store} />
        </Router>
      </Provider>
    )
  })
})
