import React, { useState } from 'react'
import './AddPet.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Form, Col, Button } from 'react-bootstrap'
import firebase, { storage } from '../../firebase'
import 'firebase/firestore'
import Cat from '../../Images/pets-vectors/addPetCat.svg'
import Paw from '../../Images/icons/paw.svg'

function AddPet() {
    const { t } = useTranslation()
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState('')

    const validationSchema = Yup.object().shape({
        petName: Yup.string().required(t('add-pet.required')),
        species: Yup.string().required(t('add-pet.required')),
        color: Yup.string().required(t('add-pet.required')),
        story: Yup.string().required(t('add-pet.required')),
        ownerName: Yup.string().required(t('add-pet.required')),
        email: Yup.string()
            .required(t('add-pet.required'))
            .email(t('add-pet.email-validation')),
        phoneNumber: Yup.string(t('add-pet.example-number'))
            .required(t('add-pet.required'))
            .matches(/^[0-9]{11}$/, t('add-pet.phone-validation')),
        city: Yup.string().required(t('add-pet.required')),
        address: Yup.string().required(t('add-pet.required')),
    })
    const {
        handleSubmit,
        setFieldValue,
        resetForm,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            petName: '',
            age: '',
            species: '',
            weight: '',
            color: '',
            gender: '',
            story: '',
            file: null,
            ownerName: '',
            aboutOwner: '',
            email: '',
            phoneNumber: '',
            city: '',
            address: '',
        },
        validationSchema,
        onSubmit() {
            const uploadTask = storage
                .ref(`petImages/${values.file.name}`)
                .put(values.file)
            uploadTask.on(
                'state_changed',

                () => {
                    storage
                        .ref('petImages')
                        .child(values.file.name)
                        .getDownloadURL()
                        .then((link) => {
                            setUrl(link)
                        })
                }
            )

            firebase
                .firestore()
                .collection('pets')
                .add({
                    ...values,
                    file: url,
                })
                .then(() => resetForm())
        },
    })

    const reader = new FileReader()

    reader.onloadend = () => {
        setFile(reader.result)
    }
    if (values.file != null) {
        reader.readAsDataURL(values.file)
    }
    return (
        <div>
            {/* page header */}
            <div className="header">
                <div className="header__text">
                    <div className="add-pet-header">
                        <img src={Paw} alt="paw" className="paw-logo" />
                        <h1>{t('add-pet.add for adoption')}</h1>
                    </div>
                    <div className="add-pet-subheader">
                        <h4>{t('add-pet.make-pets-happy')}</h4>
                    </div>
                </div>
                <div className="header__photo">
                    <img src={Cat} alt="cat" />
                </div>
            </div>
            {/* end of page header */}
            {/* page form */}
            <div className="addpet-form">
                <h2>{t('add-pet.pets-info')}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="petName"
                                onBlur={handleBlur}
                                value={values.petName}
                                placeholder={t('add-pet.pet-name')}
                            />
                            {touched.petName && errors.petName ? (
                                <div className="field-margin error-message">
                                    {errors.petName}
                                </div>
                            ) : (
                                <div className="field-margin error-message">
                                    {' '}
                                </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <Form.Control
                                onChange={handleChange}
                                name="age"
                                onBlur={handleBlur}
                                value={values.age}
                                placeholder={t('add-pet.pet-age')}
                            />
                            <div className="field-margin"> </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="species"
                                onBlur={handleBlur}
                                value={values.species}
                                placeholder={t('add-pet.pet-species')}
                            />
                            {touched.species && errors.species ? (
                                <div className="field-margin error-message">
                                    {errors.species}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <Form.Control
                                onChange={handleChange}
                                name="weight"
                                onBlur={handleBlur}
                                value={values.weight}
                                placeholder={t('add-pet.pet-weight')}
                            />
                            <div className="field-margin"> </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="color"
                                onBlur={handleBlur}
                                value={values.color}
                                placeholder={t('add-pet.pet-color')}
                            />
                            {touched.color && errors.color ? (
                                <div className="field-margin error-message">
                                    {errors.color}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <p>{t('add-pet.gender')}</p>
                            <div className="addpet-radios">
                                <Form.Check
                                    className="addpet-radio"
                                    onChange={() => {
                                        values.gender = 'male'
                                    }}
                                    type="radio"
                                    onBlur={handleBlur}
                                    name="gender"
                                    value="Male"
                                />

                                <Form.Label>{t('add-pet.male')}</Form.Label>
                                <Form.Check
                                    className="addpet-radio"
                                    onChange={() => {
                                        values.gender = 'female'
                                    }}
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                />
                                <Form.Label>{t('add-pet.female')}</Form.Label>
                            </div>
                            <div className="field-margin"> </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="story"
                                onBlur={handleBlur}
                                value={values.story}
                                placeholder={t('add-pet.pet-story')}
                            />
                            {touched.story && errors.story ? (
                                <div className="field-margin error-message">
                                    {errors.story}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <div className="upload-container">
                                <Form.Label
                                    htmlFor="file"
                                    className="custom-file-upload"
                                >
                                    <p>{t('add-pet.upload-photo')}</p>
                                </Form.Label>
                            </div>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                accept="images/*"
                                onChange={(e) => {
                                    setFieldValue(
                                        'file',
                                        e.currentTarget.files[0]
                                    )
                                }}
                            />

                            {file && (
                                <img
                                    src={file}
                                    className="upload-image"
                                    alt="your pet"
                                    width="200"
                                    height="200"
                                />
                            )}
                        </Col>
                    </Form.Row>
                    <h2>{t('add-pet.contact-info')}</h2>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="ownerName"
                                onBlur={handleBlur}
                                value={values.ownerName}
                                placeholder={t('add-pet.ownerName')}
                            />
                            {touched.ownerName && errors.ownerName ? (
                                <div className="field-margin error-message">
                                    {errors.ownerName}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <Form.Control
                                onChange={handleChange}
                                name="aboutOwner"
                                onBlur={handleBlur}
                                value={values.aboutOwner}
                                placeholder={t('add-pet.aboutOwner')}
                            />
                            <div className="field-margin"> </div>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="email"
                                type="email"
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder={t('add-pet.email')}
                            />
                            {touched.email && errors.email ? (
                                <div className="field-margin error-message">
                                    {errors.email}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <Form.Control
                                onChange={handleChange}
                                name="phoneNumber"
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                                placeholder={t('add-pet.phoneNumber')}
                            />
                            {touched.phoneNumber && errors.phoneNumber ? (
                                <div className="field-margin error-message">
                                    {errors.phoneNumber}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col lg xl>
                            <Form.Control
                                onChange={handleChange}
                                name="city"
                                onBlur={handleBlur}
                                value={values.city}
                                placeholder={t('add-pet.city')}
                            />
                            {touched.city && errors.city ? (
                                <div className="field-margin error-message">
                                    {errors.city}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                        <Col lg xl className="addpet-row-space">
                            <Form.Control
                                onChange={handleChange}
                                name="address"
                                onBlur={handleBlur}
                                value={values.address}
                                placeholder={t('add-pet.address')}
                            />
                            {touched.address && errors.address ? (
                                <div className="field-margin error-message">
                                    {errors.address}
                                </div>
                            ) : (
                                <div className="field-margin"> </div>
                            )}
                        </Col>
                    </Form.Row>
                    <div className="button-container">
                        <Button type="submit" className="btn">
                            {t('add-pet.submit')}
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddPet
