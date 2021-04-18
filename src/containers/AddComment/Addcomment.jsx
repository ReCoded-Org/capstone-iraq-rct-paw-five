import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
import { addPetComment } from '../../redux/comments/actions'

export default function Addcomment({ petId }) {
  const { t } = useTranslation()
  const userState = useSelector(state => state.user)
  const [comment, setComment] = useState()
  const dispatch = useDispatch()
  const addNewComment = e => {
    if (e.key === 'Enter' && comment !== '') {
      dispatch(
        addPetComment(petId, comment, userState.user.name, userState.user.uid)
      )
      setComment('')
    }

    return false
  }

  return (
    <div>
      {userState.isLoggedIn?
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          value={comment}
          type="text"
          name={t('detalis-page.addComment')}
          placeholder="Add a comment"
          style={{ borderRadius: '20px', height: '8vh' }}
          onChange={e => setComment(e.target.value)}
          onKeyPress={addNewComment}
        />
      </Form.Group>
      :''}
    </div>
  )
}

Addcomment.propTypes = {
  petId: PropTypes.string,
}

Addcomment.defaultProps = {
  petId: '',
}
