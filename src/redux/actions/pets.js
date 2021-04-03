const SET_PETS = 'SET_PETS'
const SET_CURRENT_PETS = 'SET_CURRENT_PETS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_LOADING = 'SET_LOADING'
const SET_FILTERS = 'SET_FILTERS'
const FILTER_PETS = 'FILTER_PETS'
const SET_POST_PER_PAGE = 'SET_POST_PER_PAGE'
/* eslint no-eval: 0 */

export const setPetsInfo = pets => ({
  type: SET_PETS,
  payload: pets,
})

export const setCurrentPets = pets => ({
  type: SET_CURRENT_PETS,
  payload: pets,
})

export const setPostPerPage = count => ({
  type: SET_POST_PER_PAGE,
  payload: count,
})

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
})

export const setLoading = status => ({
  type: SET_LOADING,
  payload: status,
})

export const setFilters = (filterKey, value) => ({
  type: SET_FILTERS,
  payload: {
    key: filterKey,
    value,
  },
})

const filter = (pets, filters) => {
  let filteredArray = pets
  if (filters.gender) {
    filteredArray = filteredArray.filter(item => item.gender === filters.gender)
  }
  if (filters.address) {
    filteredArray = filteredArray.filter(
      item => item.address === filters.address
    )
  }
  if (filters.age) {
    filteredArray = filteredArray.filter(item =>
      eval(item.age + filters.age.slice(0, 1) + 3)
    )
  }
  return filteredArray
}

export const FilterPets = (pets, filters) => ({
  type: FILTER_PETS,
  payload: {
    filteredPets: filter(pets, filters),
  },
})
