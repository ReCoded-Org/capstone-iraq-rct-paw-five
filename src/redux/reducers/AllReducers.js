import { combineReducers } from 'redux'
import petReducer, { langReducer } from './petReducer'
import user  from './user'

export default combineReducers({
  langReducer,
  pets: petReducer,
  user,
})
