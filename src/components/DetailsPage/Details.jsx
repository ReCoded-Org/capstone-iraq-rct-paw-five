import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { PropTypes } from 'prop-types'
import { useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import im2 from '../../images/details-page/Rectangle 79.svg'
import im3 from '../../images/details-page/Rectangle 80.svg'
import im4 from '../../images/details-page/image 15.svg'

function Detail({match}) {
  const { t } = useTranslation()
  const { currentPets} = useSelector(
    state => state.pets
  )
  const petInfo=currentPets.find(pet=>pet.petName===match.params.petName)
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="row justify-content-center pt-5 pb-5 " id="colorset1">
           {t('detalis-page.PetDetalis')}
          </h2>
        </Col>
      </Row>
  
      <div> <Row className=" pr-3 pb-5">
        {/** image column */}
        <Col>{}</Col>
        <Col lg={5} sm={12} md={12} xs={12} className="pt-3 ">
          {' '}
          <img src={petInfo.file} alt="pet" className="main-image img-fluid mx-2" />
        </Col>
        {/** image column */}

        <Col lg={5} className="pb-3">
          <h3 className="pb-2 pt-3 tips text-center text-lg-left" id="colorset1">
            {petInfo.petName}
          </h3>
          <Col lg={8} md={12} sm={12}>
          <div className="pt-3">
            <label htmlFor="pet species" className="label" id="colorset">
            {t('detalis-page.pet-species')}
            </label>
            <span className="pl-2 pr-5 ">
              {petInfo.species}
            </span>
          </div>
          <div className="pt-3">
            <label htmlFor="pet age" className="label" id="colorset">
            {t('detalis-page.pet-age')}
            </label>
            <span className="pl-2">{petInfo.age}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="pet-info" className="label" id="colorset">
            {t('detalis-page.pet-color')}
            </label>
            <span className="pl-2">{petInfo.color}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="pet gender" className="label" id="colorset">
            {t('detalis-page.gender')}
            </label>
            <span className="pl-2">{petInfo.gender}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="pet weight" className="label" id="colorset">
            {t('detalis-page.pet-weight')}
            </label>
            <span className="pl-2">{petInfo.weight}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="pet story" className="label" id="colorset">
             {t('detalis-page.pet-story')}
            </label>
            <span className="text pl-2">{petInfo.story}</span>
          </div>
        </Col>
         
              <Col>{}</Col>
        </Col>
        <Col>{}</Col>
      </Row>
      {/** contact info */}

      <Row id="contact-header">
        <Col>
          <h2 className="row justify-content-center pt-5 pb-5 " id="colorset1">
          {t('detalis-page.contact-info')}
          </h2>
        </Col>
      </Row>
      <Row className="contactinfo pb-5 pl-3 pl-lg-0 ">
        <Col>{}</Col>

        <Col lg={8} md={12} sm={12}>
          <div>
            <label htmlFor="owner name" className="label" id="colorset">
            {t('detalis-page.ownerName')}
            </label>
            <span className="span pl-2">{petInfo.ownerName}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="about owner" className="label" id="colorset">
            {t('detalis-page.aboutOwner')}
            </label>
            <span className="pl-2 pr-5 ">
              {petInfo.aboutOwner}
            </span>
          </div>
          <div className="pt-3">
            <label htmlFor="city" className="label" id="colorset">
            {t('detalis-page.city')}
            </label>
            <span className="pl-2">{petInfo.city}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="address" className="label" id="colorset">
            {t('detalis-page.address')}
            </label>
            <span className="pl-2">{petInfo.address}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="email" className="label" id="colorset">
            {t('detalis-page.email')}
            </label>
            <span className="pl-2">{petInfo.email}</span>
          </div>
          <div className="pt-3">
            <label htmlFor="phone number" className="label" id="colorset">
            {t('detalis-page.phoneNumber')}
            </label>
            <span className="pl-2">{petInfo.phoneNumber}</span>
          </div>
        </Col>
        <Col lg={3}>{}</Col>
      </Row>
      {/** pet gallery */}
      <Row className="pet-gallery">
        <Col>
          <h2
            style={{ color: 'white' }}
            className=" row justify-content-center pt-3 pb-3 "
          >
           {t('detalis-page.petGallery')}
          </h2>
        </Col>
      </Row>

      <Row className="pet-gallery pt-1 pb-5 ">
        <Col>
          <img src={im2} sm={4} className="img-fluid img pt-4 " alt="" />
        </Col>

        <Col sm={4}>
          <img src={im3} className="img-fluid img pt-4 " alt="" />
        </Col>

        <Col sm={4}>
          <img src={im4} className="img-fluid img pt-4 " alt="" />
        </Col>
      </Row>
      </div> 
   
    </Container>
  )
}

Detail.propTypes = {
  match: PropTypes.arrayOf,
}

Detail.defaultProps = {
  match: {},
}

export default Detail
