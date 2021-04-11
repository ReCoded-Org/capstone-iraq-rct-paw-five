import firebase from '../../firebase'

export function selectedLang(lang) {
  return {
    type: 'SELECTED_LANG',
    payload: lang,
  }
}



export function fetchMyPets (name,sortType,uid) {
    return async (dispatch) => {
        if(uid)
        if (name === null ) {
            firebase
                .firestore()
                .collection('pets')
                .where('uid', '==',uid )
                .orderBy(sortType)
                .onSnapshot((shnapshot) => {
                    const newPets = shnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    dispatch({
                        type: 'FETCH_MY_PETS',
                        payload: newPets,
                    })
                })
        } else {
            
            firebase
                .firestore()
                .collection('pets')
                .where('uid', '==',uid )
                .orderBy(sortType)
                .startAt(name)
                .endAt(`${name}\uf8ff`)
                .onSnapshot((shnapshot) => {
                    const newPets = shnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    dispatch({
                        type: 'FETCH_MY_PETS',
                        payload: newPets,
                    })
                })
        }
   }
}

export function deleteMyPett(id) {
    return (dispatch) => {
        firebase.firestore().collection('pets').doc(id).delete()
        dispatch({
            type: 'DELETE_MY_PET',
        })
    }
}

export function UpdateMyPett(id, adopt) {
    return (dispatch) => {
        firebase.firestore().collection('pets').doc(id).update({
            adopted: adopt,
        })
        dispatch({
            type: 'UPDATE_MY_PET',
        })
    }
}
