export const fetchComments = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_COMMENTS':
        return action.payload
      default:
        return state
    }
  }

  export const AddComment = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        return null
      default:
        return state
    }
  }

  export const deleteComment = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_COMMENT':
        return null
      default:
        return state
    }
  }

  export const updateView = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_VIEW':
        return null
      default:
        return state
    }
  }

  export const deleteCommentsofpet = (state = [], action) => {
    switch (action.type) {
      case 'DELETE_ALL_PET_COMMENT':
        return null
      default:
        return state
    }
  }