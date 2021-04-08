import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteMyPett } from '../../redux/actions/actions'

export default function DeleteModal({
  show,
  handleClose,
  petName,
  petId,
  petImge,
}) {
  const dispatch = useDispatch()
  const deletPet = (e, id) => {
    dispatch(deleteMyPett(id))
    handleClose()
    return false
  }

  return (
    <div  >
      <Modal show={show} onHide={handleClose}  >
        <div>
          <Modal.Header closeButton />
          <Modal.Body className="text-danger">
            <img src={petImge} alt="" height="40px" width="40px" />
            <h7 className='p-1'>Are You sure you want to delete</h7> {petName}
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="submit-button border-0"
              onClick={() => deletPet(petId)}
            >
              Yes
            </Button>
            <Button className="submit-button border-0" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  )
}

DeleteModal.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  petName: PropTypes.string,
  petId: PropTypes.string,
  petImge: PropTypes.string,
}

DeleteModal.defaultProps = {
  show: false,
  handleClose: false,
  petName: '',
  petId: '',
  petImge: '',
}
