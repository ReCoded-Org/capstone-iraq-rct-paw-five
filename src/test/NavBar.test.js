import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AllReducers from '../redux/reducers/AllReducers'
import NavBar from '../components/NavBar'

describe('navbar', () => {
  const store = createStore(AllReducers)

  test('renders App component', () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    )
  })
})
