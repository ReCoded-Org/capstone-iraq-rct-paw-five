import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import combineReducers from './reducers/AllReducers'

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store
