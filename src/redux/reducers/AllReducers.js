import { combineReducers } from 'redux'
import petReducer, {
  langReducer,
  myPets,
  deleteMyPet,
  updateMyPet,
} from './petReducer'

export default combineReducers({
  langReducer,
  pets: petReducer,
  myPets,
  deleteMyPet,
  updateMyPet,
})
