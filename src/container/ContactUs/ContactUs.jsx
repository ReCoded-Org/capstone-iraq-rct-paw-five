
import React, { useState, useEffect } from 'react'
// import emailjs from 'emailjs-com'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'

import './ContactUs.css'
import { Container, Row, Col, ResponsiveEmbed, Button } from 'react-bootstrap'
import {emailSchema, initialValues,sendEmail } from './helper'

export default function ContactUs() {
    const { t } = useTranslation()

    const [dir, setDir] = useState({})
    // const [dirButtom, setDirButton] = useState('float-right')

    const changeDir = () => {
        if (
            localStorage.getItem('i18nextLng') !== 'en' &&
            localStorage.getItem('i18nextLng') !== null
        ) {
            const newDir = {...dir};
            newDir.dir='rtl';
            newDir.dirButtom="float-left";
            newDir.mdir="ml-3";
            setDir(newDir);
            
        } else {
            const newDir = {...dir};
            newDir.dir='ltr';
            newDir.dirButtom="float-right";
            newDir.mdir="mr-3";
            setDir(newDir);
            
        }
    }

    useEffect(() => {
        changeDir()
    }, [localStorage.getItem('i18nextLng')])




    return (
        <div dir={dir.dir} className="mt-5">
            <Container>
                <Row>
                    <Col md="12" lg="6" xs="12" sm="12">
                        <Container id="demo3" className="contactus">
                            <Container align="center" className="m-4">
                                <h3 className="mb-0 title_contactus">
                                {t('contactus.title')}
                                </h3>
                            </Container>
                            <Container className="card-body ">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={emailSchema(t('contactus.required'))}
                                    onSubmit={sendEmail}
                                >
                                    {(formik) => {
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
                                                            type="text"
                                                            name="name"
                                                            placeholder={t('contactus.name')}
                                                            className="input-error"
                                                        />

                                                        <ErrorMessage
                                                            name="name"
                                                            component="div"
                                                            className={`error  ${dir.mdir}`}
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center  ">
                                                        <Field
                                                            type="email"
                                                            name="email"
                                                            placeholder={t('contactus.email')}
                                                            className="input-error"
                                                        />

                                                        <ErrorMessage
                                                            name="email"
                                                            component="span"
                                                            className={`error  ${dir.mdir}`}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center ">
                                                        <Field
                                                            type="text"
                                                            name="phone"
                                                            placeholder={t('contactus.phone')}
                                                            className="input-error"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center">
                                                        <Field
                                                            type="text"
                                                            name="subject"
                                                            placeholder={t('contactus.subject')}
                                                            className="input-error"
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
                                                            className="form-control"
                                                            required
                                                        />
                                                        <ErrorMessage
                                                            name="message"
                                                            component="span"
                                                            className="errorofMessage ml-1"
                                                        />
                                                    </div>
                                                </div>
                                                <Button 
                                                    type="submit"
                                                    className={`btn  btn-lg submitButton  ${dir.dirButtom}`}
                                                    disabled={
                                                        !(dirty && isValid)
                                                    }
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
                        className="align-self-center text mt-5"
                    >
                        <h4>{t('contactus.h4text')}</h4>
                        <h1>{t('contactus.h1text')}</h1>
                        <h6>{t('contactus.h6text')}</h6>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="mt-5 mb-5 ">
                    <ResponsiveEmbed className="mapHeight" aspectRatio="16by9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13336.605883119555!2d44.3770677!3d33.3148553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x927ea3c6fb5cd552!2sAl-Zawraa%20Park!5e0!3m2!1sen!2siq!4v1616624591055!5m2!1sen!2siq"
                            title="map"
                            height="450"
                            loading="lazy"
                        />
                    </ResponsiveEmbed>
                </Row>
            </Container>
        </div>
    )
}
