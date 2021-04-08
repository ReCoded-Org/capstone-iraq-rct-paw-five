import React,{useState,useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import { useDispatch,useSelector } from 'react-redux'
import { deleteMyPett } from '../../redux/actions/actions'


export default function DeleteModal({
  show,
  handleClose,
  petName,
  petId,
  petImge,
}) {

  const globaleLang = useSelector(state => state.langReducer)

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const deletPet = (e, id) => {
    dispatch(deleteMyPett(id))
    handleClose()
    return false
  }


  const [dirProperties, setDir] = useState({
    dir: 'ltr',
    textDir: 'text-left',
  })

  const handelDir = () => {
    if (
      globaleLang !== 'en' &&
      globaleLang !== null
    ) {
      const newDir = 'rtl'
      const newtextDir = 'text-right'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    } else {
      const newDir = 'ltr'
      const newtextDir = 'text-left'
      const newdirProperties = { ...dirProperties }
      newdirProperties.dir = newDir
      newdirProperties.textDir = newtextDir
      setDir(newdirProperties)
    }
  }
  useEffect(() => {
    handelDir()
  }, [globaleLang])
  return (
    <div  >
      <Modal show={show} onHide={handleClose} dir={dirProperties.dir}   >
        <div>
          <Modal.Header closeButton />
          <Modal.Body className={`text-danger ${dirProperties.textDir}`}>
            <img src={petImge} alt="" height="40px" width="40px"  />
            <h7 className='p-1 text-center'>{t('mypets.warningmessage')}</h7> {petName}
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="submit-button border-0"
              onClick={() => deletPet(petId)}
            >
             {t('mypets.yes')}
            </Button>
            <Button className="submit-button border-0" onClick={handleClose}>
            {t('mypets.no')}
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
