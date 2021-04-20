import { Row, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../../App.css'
import { useTranslation } from 'react-i18next'
import im from '../../images/ResourcePageCat/Rectangle 1.svg'
import im2 from '../../images/ResourcePageCat/Rectangle 2.svg'
import im3 from '../../images/ResourcePageCat/Rectangle 3.svg'

export default function Resources() {
  const { t } = useTranslation()

  return (
    <Container fluid>
      <Row className="row justify-content-center pt-3 ">
        <h3
          className="font-weight-bold text-center mx-2"
          style={{ color: '#e79559' }}
        >
          {t('Resource.Tips for the First 30 Days of cat Adoption')}
        </h3>
      </Row>
      <Row className="row justify-content-center pt-3 pb-5 ">
        <img src={im} alt="cat care" className=" w-75 h-75" />
      </Row>
      <Row className="pt-3" id="content">
        {' '}
        <Col sm={0}>{}</Col>
        <Col lg={10} sm={12}>
          {' '}
          <h4 className="text-center">
            {t('Resource.Before You Bring Your Cat Home')}
          </h4>
        </Col>
        <Col sm={0}>{}</Col>
      </Row>
      <Row className="row  pt-2 pt-3 pb-4 " id="content">
        <Col>{}</Col>
        <Col lg={10} md={12} sm={12}>
          <ol style={{ listStyle: 'none' }}>
            <li>{t('Resource.text1')}</li>
            <li className="pt-4">{t('Resource.text2')}</li>
            <li className="pt-4">{t('Resource.text3')}</li>
            <li className="pt-4">{t('Resource.text4')}</li>
          </ol>
        </Col>
        <Col>{}</Col>
      </Row>
      <Row className="row justify-content-center pt-5 img-background-color pb-5">
        <img src={im2} alt="" className=" w-75 h-75" />
      </Row>
      <Row className=" pt-5  pl-5 " id="content">
        {' '}
        <Col sm={0} md={0}>
          {}
        </Col>
        <Col lg={10} md={12} sm={12} xs={12}>
          {' '}
          <h3>{t('Resource.First Day')}</h3>
        </Col>
        <Col sm={0}>{}</Col>
      </Row>
      <Row className="row" style={{ paddingBottom: '170px' }} id="content">
        <Col>{}</Col>
        <Col lg={10} md={12}>
          <ol style={{ listStyle: 'none' }}>
            <li className="pt-4 ">{t('Resource.text5')}</li>
            <li className="pt-4 ">{t('Resource.text6')}</li>
          </ol>
        </Col>
        <Col>{}</Col>
      </Row>{' '}
      <Row
        className="row justify-content-center pb-5 pt-5"
        style={{ marginTop: '-200px' }}
      >
        {' '}
        <img src={im3} alt="" className=" w-75 h-75" />
      </Row>
      <Row className="pl-5" md={12} sm={12}>
        {' '}
        <Col>{}</Col>
        <Col lg={10}>
          {' '}
          <h3>{t('Resource.FollowingWeeks')}</h3>
          <h5 style={{ fontWeight: 100 }} className="pt-3">
            {t('Resource.Itmaytakeyourcataweek or two to adjustBe patient')}
          </h5>
        </Col>
        <Col>{}</Col>
      </Row>
      <Row className="row justify-content-center  pt-2 pb-5 ">
        <Col md={0}>{}</Col>
        <Col lg={10} md={12} sm={12}>
          <ol style={{ listStyle: 'none' }}>
            <li className="pt-4 pb-1 ">{t('Resource.text7')}</li>
            <li className="pt-3 ">{t('Resource.text8')}</li>
          </ol>
        </Col>
        <Col md={0}>{}</Col>
      </Row>
    </Container>
  )
}
