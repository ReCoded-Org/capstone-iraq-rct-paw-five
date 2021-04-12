import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import firebase from '../../../firebase'
import './Login.css'
import Close from '../../../images/login/close.svg'
import Google from '../../../images/login/google.svg'
import Facebook from '../../../images/login/facebook.svg'

function Login({ onHide }) {
  const { t } = useTranslation()
  const userState = useSelector(state => state.user.isLoggedIn)

  const handelLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider)
  }

  const handelLoginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  return (
    <div>
      <Modal animation={false} show centered className="rounded">
        <div className="bg-modal-login bg-modal-login-2">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="bg-transparent border-0 m-1"
              onClick={onHide}
            >
              <img src={Close} className="w-75 h-75" alt="close modal" />
            </button>
          </div>
          <div className="d-flex justify-content-center text-white mt-2">
            <h4>{t('login.log-in')}</h4>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Button
              onClick={handelLoginWithGoogle}
              className="bg-white text-black w-50 rounded d-flex justify-content-center align-items-center py-2 border-0"
            >
              <img
                src={Google}
                alt="google icon"
                width="19"
                height="19"
                className="d-block mt-1 mx-2 "
              />
              <p className="text-dark my-auto small ">{t('login.google')}</p>
            </Button>
          </div>
          <div className="d-flex justify-content-center mb-5 pb-5">
            <Button
              onClick={handelLoginWithFacebook}
              className="background-facebook text-black w-50 rounded d-flex justify-content-center align-items-center py-2 border-0"
            >
              <img
                src={Facebook}
                alt="Facebook icon"
                width="21"
                height="21"
                className="d-block mt-0 mx-2 "
              />
              <p
                className="text-white my-auto small

"
              >
                {t('login.facebook')}
              </p>
            </Button>
          </div>
        </div>
        {userState ? onHide() : ''}
      </Modal>
    </div>
  )
}

Login.propTypes = {
  onHide: PropTypes.func,
}
Login.defaultProps = {
  onHide: {},
}

export default Login
