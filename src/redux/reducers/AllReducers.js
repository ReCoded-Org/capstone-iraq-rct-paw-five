import { combineReducers } from 'redux'
import petReducer, {
  langReducer,
  myPets,
  deleteMyPet,
  updateMyPet,
} from './petReducer'
import user from './user'
import { AddComment, fetchComments,deleteComment,updateView,deleteCommentsofpet } from '../comments/reducer'

export default combineReducers({
  langReducer,
  pets: petReducer,
  user,
  myPets,
  deleteMyPet,
  updateMyPet,
  AddComment,
  fetchComments,
  deleteComment,
  updateView,
  deleteCommentsofpet
})
