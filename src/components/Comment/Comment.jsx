import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '../../redux/comments/actions'

export default function Comment({ username, usercomment, commentId, userId }) {
  const userState = useSelector(state => state.user.isLoggedIn)
  const user = useSelector(state => state.user)
  const [currentuserId, setcurrentuserId] = useState(
    useSelector(state => state.user.isLoggedIn)
  )

  useEffect(() => {
    if (userState === true) {
      setcurrentuserId(user.user.uid)
    } else {
      setcurrentuserId('')
    }
  }, [userState])

  const dispatch = useDispatch()
  const deletePetComment = (e, Id) => {
    dispatch(deleteComment(Id))
  }
  return (
    <div className="p-2">
      <div className="card " style={{ borderRadius: '20px' }}>
        <div className="card-body">
          <p className="card-text">{username}</p>
          <p className="card-text">{usercomment}</p>
          {userId === currentuserId ? (
            <FontAwesomeIcon
              onClick={e => deletePetComment(e, commentId)}
              icon={faTrash}
              className="float-right text-danger"
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}
Comment.propTypes = {
  username: PropTypes.string,
  usercomment: PropTypes.string,
  commentId: PropTypes.string,
  userId: PropTypes.string,
}

Comment.defaultProps = {
  username: '',
  usercomment: '',
  commentId: '',
  userId: '',
}
