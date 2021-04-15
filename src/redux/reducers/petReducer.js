import * as t from '../types'

export const langReducer = (state = localStorage.getItem('lang'), action) => {
  switch (action.type) {
    case 'SELECTED_LANG':
      return action.payload
    default:
      return state
  }
}

export const myPets = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MY_PETS':
      return action.payload
    default:
      return state
  }
}


export const deleteMyPet = (state = null, action) => {
  switch (action.type) {
    case 'DELETE_MY_PET':
      return null
    default:
      return state
  }
}

export const updateMyPet = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_MY_PET':
      return null
    default:
      return state
  }
}

export const getPetDataByIdReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATA_BY_ID':
      return action.payload
    default:
      return state
  }
}





const petReducer = (
  state = {
    currentPets: [],
    data: [],
    filters: {},
    currentPage: 1,
    loading: true,
  },
  action
) => {
  switch (action.type) {
    case t.SET_PETS:
      return { ...state, data: action.payload, filteredPets: action.payload }
    case t.SET_CURRENT_PETS:
      return { ...state, currentPets: action.payload }
    case t.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case t.SET_POST_PER_PAGE:
      return { ...state, postPerPage: action.payload }
    case t.SET_LOADING:
      return { ...state, loading: action.payload }
    case t.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      }
    case t.FILTER_PETS:
      return { ...state, filteredPets: action.payload.filteredPets }
    default:
      return { ...state }
  }
}

export default petReducer
