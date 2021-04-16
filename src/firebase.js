import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBoWWO2wP7w5K5t8X98Two9xJ0MojAwA9E',
  authDomain: 'pawfive-eb9d4.firebaseapp.com',
  projectId: 'pawfive-eb9d4',
  storageBucket: 'pawfive-eb9d4.appspot.com',
  messagingSenderId: '275629003440',
  appId: '1:275629003440:web:69429a61a2226adf966175',
}

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export { storage, firebase as default }
