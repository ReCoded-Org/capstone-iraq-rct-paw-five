import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

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
        <div className="addpet-form">
            <h2 className="font-weight-bold text-center text-lg-left mb-5 mt-4">
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
                        />
                        {touched.petName && errors.petName ? (
                            <div className="field-margin error-message">
                                {errors.petName}
                            </div>
                        ) : (
                            <div className="field-margin error-message"> </div>
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
                        <div className="d-flex justify-content-start">
                            <Form.Check
                                className="mr-1"
                                onChange={() => {
                                    Values.gender = 'male'
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
                                    Values.gender = 'female'
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
                        <div>
                            <Form.Label
                                htmlFor="file"
                                className=" text-center d-flex flex-column align-items-center justify-content-center bg-transparent custom-file-upload"
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
                            onChange={(e) => {
                                setFieldValue('file', e.currentTarget.files[0])
                            }}
                            className="d-none"
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
                <h2 className="font-weight-bold text-center text-lg-left mb-5 mt-5">
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
                <div className="d-flex d-flex justify-content-center">
                    <Button type="submit" className="btn">
                        {t('add-pet.submit')}
                    </Button>
                </div>
            </Form>
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
