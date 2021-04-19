import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import AddCpmment from '../../containers/AddComment/Addcomment'
import AllReducers from '../../redux/reducers/AllReducers'

const store = createStore(AllReducers)

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <AddCpmment store={store} />
        </Router>
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
