import { combineReducers } from 'redux'
import petReducer, {
  langReducer,
  myPets,
  deleteMyPet,
  updateMyPet,
  getPetDataByIdReducer
} from './petReducer'
import user from './user'

export default combineReducers({
  langReducer,
  pets: petReducer,
  user,
  myPets,
  deleteMyPet,
  updateMyPet,
  getPetDataByIdReducer
})
