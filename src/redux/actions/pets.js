import firebase from '../../firebase'
import * as t from '../types'




export const setLoading = status => ({
  type: t.SET_LOADING,
  payload: status,
})

export const setPetsInfo = pets => ({
  type:t.SET_PETS,
  payload: pets,
})

export const fetchPetsInfo = (location) => {
  let petsRef = null

  if (location.query) {
    if (
      location.query.city !== '' &&
      location.query.age !== '' &&
      location.query.type !== ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
        .where('species', '==', location.query.type)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.city !== '' &&
      location.query.age !== '' &&
      location.query.type === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.type !== '' &&
      location.query.age !== '' &&
      location.query.city === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
        .where('age', '==', location.query.age)
    }

    if (
      location.query.type !== '' &&
      location.query.city !== '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
        .where('city', '==', location.query.city)
    }

    if (
      location.query.type !== '' &&
      location.query.city === '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('species', '==', location.query.type)
    }

    if (
      location.query.type === '' &&
      location.query.city !== '' &&
      location.query.age === ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('city', '==', location.query.city)
    }

    if (
      location.query.type === '' &&
      location.query.city === '' &&
      location.query.age !== ''
    ) {
      petsRef = firebase
        .firestore()
        .collection('pets')
        .where('age', '==', location.query.age)
    }
  }

  if (petsRef === null) {
    petsRef = firebase.firestore().collection('pets')
  }

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
