import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import firebase, { storage } from '../../firebase'
import AddPetForm from './AddPetForm'
import 'firebase/firestore'
import Cat from '../../images/Add-pet/AddPetCat.svg'
import Paw from '../../images/Add-pet/paw.svg'
import date from './currentDate'


function AddPet() {

  const { t } = useTranslation()
  const [file, setFile] = useState(null)
  const userState = useSelector(state => state.user)



  const validationSchema = Yup.object().shape({
    petName: Yup.string().required(t('add-pet.required')),
    species: Yup.string().required(t('add-pet.required')),
    age: Yup.string(t('add-pet.must-number')).max(
      2,
      t('add-pet.age-validation')
    ),
    weight: Yup.string(t('add-pet.weight-validation')).max(
      3,
      t('add-pet.weight-validation')
    ),
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
      // date:currentDate,
      adopted: false
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
            .then(link => {
              if(userState.user){
              firebase
                .firestore()
                .collection('pets')
                .add({
                  ...values,
                  adopted: false,
                  currentDate:date,
                  uid:userState.user.uid,
                  file: link,
                })
                .then(() => resetForm())
              }
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
  return !userState ? (
    <Redirect to="/login" />
  ) : (
    <div className="overflow-hidden">
      {/* page header */}
      <Row className="mb-4">
        <Col className="pt-5 pl-lg-5 ml-lg-4">
          <div className="d-flex flex-column-reverse align-items-center flex-md-row justify-content-md-center justify-content-lg-start mt-4 mb-4">
            <img
              src={Paw}
              alt="paw"
              className="mt-4 mt-md-0 mr-lg-2 "
              width="55"
              height="55"
            />
            <h1
              className="font-weight-bold fs-1 text-center text-md-left px-2"
              style={{ color: '#e79559' }}
            >
              {t('add-pet.add for adoption')}
            </h1>
          </div>
          <div className="text-muted w-75 w-form ml-lg-5 pl-lg-2 mb-4">
            <h4 className="px-3 text-center text-lg-left">
              {t('add-pet.make-pets-happy')}
            </h4>
          </div>
        </Col>
        <Col lg={4} className="d-flex justify-content-end ml-lg-5">
          <img src={Cat} alt="cat" className="w-100 cat-image" height="450" />
        </Col>
      </Row>
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
