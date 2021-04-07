import { combineReducers } from 'redux'
import petReducer, { langReducer } from './petReducer'

export default combineReducers({
  langReducer,
  pets: petReducer,
})
