

 export default function user (state = {
    isLoggedIn:false
}, action) {
    switch (action.type) {
      case 'USER_STATUS':
        return action.payload
      default:
        return state
    }
  }
  