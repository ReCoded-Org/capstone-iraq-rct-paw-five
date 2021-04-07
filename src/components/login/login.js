import React from 'react'
import firebase from '../../firebase'

function Login() {

const handelLogin=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth()
  .signInWithPopup(provider)
}

 
return(<>
<button type="button" onClick={handelLogin}>login with google</button>



</>)


}

export default Login






