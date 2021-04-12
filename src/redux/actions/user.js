export default function userStatus(data) {
  return {
    type: 'USER_STATUS',
    payload: data,
  }
}

export function setUserInfo(data) {
  return {
    type: 'USER_INFO',
    payload: data,
  }
}

export function logIn() {
  return {
    type: 'LOGIN_USER',
    payload: '',
  }
}
