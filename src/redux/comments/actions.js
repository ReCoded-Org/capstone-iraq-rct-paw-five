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
      viewed: false,
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

export function updateCommentView(commentId) {
  return dispatch => {
    firebase.firestore().collection('comments').doc(commentId).update({
      viewed: true,
    })
    dispatch({
      type: 'UPDATE_VIEW',
    })
  }
}

export function deleteAllCommentofPet(petId) {
  return async dispatch => {
    firebase
      .firestore()
      .collection('comments')
      .where('petId', '==', petId)
      .onSnapshot(shnapshot => {
        const PetComments = shnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))

        for(let i=0;i<PetComments.length;i+=1){
          firebase.firestore().collection('comments').doc(PetComments[i].id).delete()
        }
        dispatch({
          type: 'DELETE_ALL_PET_COMMENT',
        })
      })
  }
}