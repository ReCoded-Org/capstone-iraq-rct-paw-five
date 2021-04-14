import firebase from '../../firebase'
import * as t from '../types'

const petsRef = firebase.firestore().collection('pets')


export const setLoading = status => ({
  type: t.SET_LOADING,
  payload: status,
})

export const setPetsInfo = pets => ({
  type:t.SET_PETS,
  payload: pets,
})

export const fetchPetsInfo = () => {
  return async dispatch => {
    // dispatch({type:"SET_LOADING",loading:true})
    return petsRef.onSnapshot(snapshot => {
      const petsArray = []
      snapshot.forEach(petDoc => {
        petsArray.push(petDoc.data())
      })
      dispatch({ type: 'SET_PETS', payload: petsArray })
      dispatch({ type: 'SET_LOADING', payload: false })
    })
  }
}



export const setCurrentPets = pets => ({
  type: t.SET_CURRENT_PETS,
  payload: pets,
})

export const setPostPerPage = count => ({
  type: t.SET_POST_PER_PAGE,
  payload: count,
})

export const setCurrentPage = page => ({
  type: t.SET_CURRENT_PAGE,
  payload: page,
})


export const setFilters = (filterKey, value) => ({
  type: t.SET_FILTERS,
  payload: {
    key: filterKey,
    value,
  },
})

export const FilteredPets = (filteredPets) => ({
  type: t.FILTER_PETS,
  payload: {
    filteredPets
  },
})
