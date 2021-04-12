export default function user(
  state = {
    isLoggedIn: false,
    user: {},
  },
  action
) {
  switch (action.type) {
    case 'USER_STATUS':
      return { ...state,isLoggedIn:action.payload}
    case 'USER_INFO':
      return { ...state, user: action.payload }
    default:
      return state
  }
}
