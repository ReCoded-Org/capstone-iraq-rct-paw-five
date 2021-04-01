export const langReducer = (state = localStorage.getItem('lang'), action) => {
  switch (action.type) {
    case 'SELECTED_LANG':
      return action.payload
    default:
      return state
  }
}

export const test = (state = localStorage.getItem('lang'), action) => {
  switch (action.type) {
    case 'SELECTED_LANG':
      return action.payload
    default:
      return state
  }
}
