import React, { useState } from 'react'
import './AddPet.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Form, Col, Button } from 'react-bootstrap'
import firebase, { storage } from '../../firebase'
import AddPetForm from './AddPetForm'
import 'firebase/firestore'
import Cat from '../../images/pets-vectors/addPetCat.svg'
import Paw from '../../images/icons/paw.svg'

function AddPet() {
    const { t } = useTranslation()
    const [file, setFile] = useState(null)

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
        handleChange,
        handleBlur,
        resetForm,
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
                            firebase
                                .firestore()
                                .collection('pets')
                                .add({
                                    ...values,
                                    file: link,
                                })
                                .then(() => resetForm())
                        })
                }
            )
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
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                <div className="header__text">
                    <div className="d-flex flex-column-reverse align-items-center flex-md-row justify-content-md-center justify-content-lg-start mt-4 mb-4">
                        <img src={Paw} alt="paw" className="mt-4 mt-md-0 " />
                        <h1 className="add-pet-header">
                            {t('add-pet.add for adoption')}
                        </h1>
                    </div>
                    <div className="add-pet-subheader">
                        <h4>{t('add-pet.make-pets-happy')}</h4>
                    </div>
                </div>
                <div className="header__photo">
                    <img src={Cat} alt="cat" />
                </div>
            </div>
            <AddPetForm
                handleSubmit={handleSubmit}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                errors={errors}
                touched={touched}
                file={file}
            />
        </div>
    )
}

export default AddPet
