import { combineReducers } from 'redux'
import petReducer, {
  langReducer,
  myPets,
  deleteMyPet,
  updateMyPet,
} from './petReducer'
import user from './user'

export default combineReducers({
  langReducer,
  pets: petReducer,
  user,
  myPets,
  deleteMyPet,
  updateMyPet,
})
