import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import combineReducers from './reducers/AllReducers'

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
