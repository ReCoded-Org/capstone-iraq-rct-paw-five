import { combineReducers } from 'redux'
import { langReducer } from './petReducer'

export default combineReducers({
  langReducer,
  pets: petReducer
})