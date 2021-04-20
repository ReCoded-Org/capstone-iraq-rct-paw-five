import React, { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function ContactUs() {
  const globaleLang = useSelector(state => state.langReducer)
  const { t } = useTranslation()

  const [dir, setDir] = useState({})

  const emailSchema = required =>
    Yup.object().shape({
      name: Yup.string().required(required),
      email: Yup.string().email().required(required),
      message: Yup.string().required(required),
    })

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    message: '',
    subject: '',
  }

  const changeDir = () => {
    if (
      localStorage.getItem('lang') !== 'en' &&
      localStorage.getItem('lang') !== null
    ) {
      const newDir = { ...dir }
      newDir.dir = 'rtl'
      newDir.dirButtom = 'float-left'
      newDir.mdir = 'ml-3'
      setDir(newDir)
    } else {
      const newDir = { ...dir }
      newDir.dir = 'ltr'
      newDir.dirButtom = 'float-right'
      newDir.mdir = 'mr-3'
      setDir(newDir)
    }
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm(
      'service_vg9bk5b',
      'template_snre7hs',
      e.target,
      'user_E56W1Sop4bo4PGpuGBxld'
    )
    e.target.reset()
  }

  useEffect(() => {
    changeDir()
  }, [globaleLang])

  return (
    <div dir={dir.dir} className="mt-5">
      <Container>
        <Row>
          <Col className="d-flex rounded " md="12" lg="6" xs="12" sm="12">
            <Container
              id="demo3"
              className=" contact-us theme-color  p-3 mb-5"
              style={{ borderRadius: '30px' }}
            >
              <Container align="center" className="m-4">
                <h3 className="mb-0 text-light">{t('contactus.title')}</h3>
              </Container>
              <Container className="card-body ">
                <Formik
                  initialValues={initialValues}
                  validationSchema={emailSchema(t('contactus.required'))}
                  onSubmit={sendEmail}
                >
                  {formik => {
                    const {
                      // errors,
                      // touched,
                      isValid,
                      dirty,
                    } = formik
                    return (
                      <Form onSubmit={sendEmail}>
                        <div className="row ">
                          <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-around ">
                            <Field
                              autocomplete="off"
                              type="text"
                              name="name"
                              placeholder={t('contactus.name')}
                              className=" border-0  bg-transparent text-light shadow-none  small p-2 rounded mb-4"
                            />

                            <ErrorMessage
                              name="name"
                              component="div"
                              className={`error position-absolute small text-warning pb-3 mt-5  ${dir.mdir}`}
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center  ">
                            <Field
                              type="email"
                              name="email"
                              placeholder={t('contactus.email')}
                              className="  border-0  bg-transparent text-light shadow-none small p-2 rounded mb-4 "
                            />

                            <ErrorMessage
                              name="email"
                              component="span"
                              className={`error position-absolute small text-warning pb-3 mt-5 ${dir.mdir}`}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center ">
                            <Field
                              type="text"
                              name="phone"
                              placeholder={t('contactus.phone')}
                              className=" border-0 bg-transparent text-light shadow-none small p-2 rounded mb-4"
                            />
                          </div>
                          <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                            <Field
                              type="text"
                              name="subject"
                              placeholder={t('contactus.subject')}
                              className=" border-0  bg-transparent  text-light shadow-none rounded small p-2 mb-4"
                            />
                          </div>
                        </div>

                        <div className="row mb-4 ">
                          <div className="col-lg-12 d-flex justify-content-center">
                            <Field
                              as="textarea"
                              rows="6"
                              name="message"
                              placeholder={t('contactus.message')}
                              id="message2"
                              className="w-100 h-100 text-light shadow-none border-0 small  bg-transparent"
                              required
                            />
                            <ErrorMessage
                              name="message"
                              component="span"
                              className="position-absolute small text-warning  pb-3 mt-5"
                              style={{ top: '72px' }}
                            />
                          </div>
                        </div>
                        <Button
                          align="center"
                          type="submit"
                          className={`btn w-25 submit-button border-0  shadow-none  btn mb-2 rounded  ${dir.dirButtom}`}
                          disabled={!(dirty && isValid)}
                        >
                          {t('contactus.submit')}
                        </Button>
                      </Form>
                    )
                  }}
                </Formik>
              </Container>
            </Container>
          </Col>
          <Col
            md="12"
            lg="6"
            xs="12"
            sm="12"
            align="center"
            className="align-self-center gradient-text mt-5"
          >
            <h4>{t('contactus.h4text')}</h4>
            <h1>{t('contactus.h1text')}</h1>
            <h6>{t('contactus.h6text')}</h6>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-5 ">
          {/* <ResponsiveEmbed className="h-25" aspectRatio="16by9"> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13336.605883119555!2d44.3770677!3d33.3148553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x927ea3c6fb5cd552!2sAl-Zawraa%20Park!5e0!3m2!1sen!2siq!4v1616624591055!5m2!1sen!2siq"
            title="map"
            height="450"
            loading="lazy"
            className=" w-100"
          />
          {/* </ResponsiveEmbed> */}
        </Row>
      </Container>
    </div>
  )
}
