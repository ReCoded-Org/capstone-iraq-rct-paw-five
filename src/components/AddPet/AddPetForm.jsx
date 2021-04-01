import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './AddPet.css'

function AddPetForm({
  handleSubmit,
  setFieldValue,
  file,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) {
  const { t } = useTranslation()
  const Values = values
  return (
    <div className="py-1 px-5" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="px-lg-5">
        <h2
          className="font-weight-bold text-center text-lg-left mb-5 mt-4"
          style={{ color: '#e79559' }}
        >
          {t('add-pet.pets-info')}
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col lg xl>
              <Form.Control
                onChange={handleChange}
                name="petName"
                onBlur={handleBlur}
                value={values.petName}
                placeholder={t('add-pet.pet-name')}
                className={`${
                  touched.petName && errors.petName ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.petName && errors.petName ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.petName}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl className="a">
              <Form.Control
                onChange={handleChange}
                name="age"
                onBlur={handleBlur}
                value={values.age}
                placeholder={t('add-pet.pet-age')}
                className={`${
                  touched.age && errors.age ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.age && errors.age ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.age}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
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
                className={`${
                  touched.species && errors.species ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.species && errors.species ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.species}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl className="">
              <Form.Control
                onChange={handleChange}
                name="weight"
                onBlur={handleBlur}
                value={values.weight}
                placeholder={t('add-pet.pet-weight')}
                className={`${
                  touched.weight && errors.weight ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.weight && errors.weight ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.weight}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
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
                className={`${
                  touched.color && errors.color ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.color && errors.color ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.color}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl>
              <p>{t('add-pet.gender')}</p>
              <div className="d-flex justify-content-start mb-4">
                <Form.Check
                  className="mr-3"
                  onChange={() => {
                    Values.gender = 'male'
                  }}
                  type="radio"
                  onBlur={handleBlur}
                  name="gender"
                  value="Male"
                />

                <Form.Label className="mr-3">{t('add-pet.male')}</Form.Label>
                <Form.Check
                  className="mr-3"
                  onChange={() => {
                    Values.gender = 'female'
                  }}
                  type="radio"
                  name="gender"
                  value="Female"
                />
                <Form.Label className="mr-3">{t('add-pet.female')}</Form.Label>
              </div>
              <div className="mb-5"> </div>
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
                className={`${
                  touched.story && errors.story ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.story && errors.story ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.story}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl className="">
              <div>
                <Form.Label
                  htmlFor="file"
                  className=" text-center d-flex flex-column align-items-center justify-content-center bg-transparent border rounded uplod-border rounded-3 w-75 w-form mt-3"
                >
                  <p className="d-block text-center my-auto py-2">
                    {t('add-pet.upload-photo')}
                  </p>
                </Form.Label>
              </div>
              <input
                id="file"
                name="file"
                type="file"
                accept="images/*"
                onChange={e => {
                  setFieldValue('file', e.currentTarget.files[0])
                }}
                className="d-none"
              />

              {file && (
                <img
                  src={file}
                  className="d-block mt-4 mx-auto"
                  alt="your pet"
                  width="200"
                  height="200"
                />
              )}
            </Col>
          </Form.Row>
          <h2
            className="font-weight-bold text-center text-lg-left mb-5 mt-5"
            style={{ color: '#e79559' }}
          >
            {t('add-pet.contact-info')}
          </h2>
          <Form.Row>
            <Col lg xl>
              <Form.Control
                onChange={handleChange}
                name="ownerName"
                onBlur={handleBlur}
                value={values.ownerName}
                placeholder={t('add-pet.ownerName')}
                className={`${
                  touched.ownerName && errors.ownerName ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.ownerName && errors.ownerName ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.ownerName}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl className="addpet-row-space">
              <Form.Control
                onChange={handleChange}
                name="aboutOwner"
                onBlur={handleBlur}
                value={values.aboutOwner}
                placeholder={t('add-pet.aboutOwner')}
                className=" mb-5 form-borders rounded-0 border-0 w-75 w-form"
              />
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
                className={`${
                  touched.email && errors.email ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.email && errors.email ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.email}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl>
              <Form.Control
                onChange={handleChange}
                name="phoneNumber"
                onBlur={handleBlur}
                value={values.phoneNumber}
                placeholder={t('add-pet.phoneNumber')}
                className={`${
                  touched.phoneNumber && errors.phoneNumber ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.phoneNumber && errors.phoneNumber ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.phoneNumber}
                </div>
              ) : (
                <div className="mb-5"> </div>
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
                className={`${
                  touched.city && errors.city ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.city && errors.city ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.city}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
            <Col lg xl className="addpet-row-space">
              <Form.Control
                onChange={handleChange}
                name="address"
                onBlur={handleBlur}
                value={values.address}
                placeholder={t('add-pet.address')}
                className={`${
                  touched.address && errors.address ? 'mb-2' : 'mb-5'
                } form-borders rounded-0 border-0 w-75 w-form`}
              />
              {touched.address && errors.address ? (
                <div className="mb-2 text-center text-lg-left text-danger">
                  {errors.address}
                </div>
              ) : (
                <div className="mb-5"> </div>
              )}
            </Col>
          </Form.Row>
          <div className="d-flex d-flex justify-content-center mr-lg-5">
            <Button
              type="submit"
              className="btn px-5 mr-lg-5 my-4 text-dark border-0"
              style={{ backgroundColor: '#e79559' }}
            >
              {t('add-pet.submit')}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
AddPetForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  file: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  touched: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AddPetForm
