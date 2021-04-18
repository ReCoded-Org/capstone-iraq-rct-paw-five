import firebase from '../../firebase'

export function fetchPetcomments() {
  return async dispatch => {
    firebase
      .firestore()
      .collection('comments')
      .onSnapshot(shnapshot => {
        const PetComments = shnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        dispatch({
          type: 'FETCH_COMMENTS',
          payload: PetComments,
        })
      })
  }
}

export function addPetComment(petId, comment, name, userId) {
  return dispatch => {
    firebase.firestore().collection('comments').add({
      name,
      petId,
      userId,
      comment,
    })
    dispatch({
      type: 'ADD_COMMENT',
    })
  }
}

export function deleteComment(commentId) {
  return dispatch => {
    firebase.firestore().collection('comments').doc(commentId).delete()
    dispatch({
      type: 'DELETE_COMMENT',
    })
  }
}
