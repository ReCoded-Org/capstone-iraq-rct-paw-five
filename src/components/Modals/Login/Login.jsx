import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import './Login.css'
import Close from '../../../images/login/close.svg'

function Login({ onHide }) {
    return (
        <div>
            <Modal show centered className="rounded">
                <div className="bg-modal-login bg-modal-login-2">
                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="bg-transparent border-0 m-1"
                            onClick={onHide}
                        >
                            <img
                                src={Close}
                                className="w-75 h-75"
                                alt="close modal"
                            />
                        </button>
                    </div>
                    <div className="d-flex justify-content-center text-white mt-2">
                        <h3>Log In</h3>
                    </div>
                    <div className="d-flex justify-content-center mt-5 mb-5">
                        <Button className="bg-white w-50">
                            <div className="col s12 m6 offset-m3 center-align">
                                <div
                                    className="oauth-container btn darken-4 white black-text d-flex"
                                    style={{ textTransform: 'none' }}
                                >
                                    <div className="left">
                                        <img
                                            width="20px"
                                            style={{
                                                marginRight: '8px',
                                            }}
                                            alt="Google sign-in"
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                                        />
                                    </div>
                                    Login with Google
                                </div>
                            </div>
                        </Button>
                    </div>
                    <div className="d-flex justify-content-center mb-5 pb-5">
                        <Button className="bg-white w-50">Light</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

Login.propTypes = {
    onHide: PropTypes.func.isRequired,
}

export default Login
