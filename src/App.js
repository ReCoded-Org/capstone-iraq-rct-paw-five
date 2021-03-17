import { useEffect } from 'react'
import firebase from './db/firebase'
 
function App() {

const ref=firebase.firestore().collection("pets")

useEffect(()=>{
ref.onSnapshot((querySnapshot)=>{
  querySnapshot.forEach((doc)=>{
    console.log(doc.data())
  })
})
})
  return (
    <div >
     paw-five 
    </div>
  );
}
 
export default App;
