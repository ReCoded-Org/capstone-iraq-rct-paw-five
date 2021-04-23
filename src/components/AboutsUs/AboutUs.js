import { Row, Col, Container, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Im from '../../images/About-us/Image.svg'
import im2 from '../../images/About-us/Blob.svg'
import '../../App.css'
import PuppyBath from '../../images/About-us/dog_grooming_24x.svg'
import DogsBoard from '../../images/About-us/dog_stream_24x.svg'
import PupsTrained from '../../images/About-us/dog_love_24x.svg'
import MealsServed from '../../images/About-us/dog_vet_24x.svg'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import OverlineMarkIconPurple from '../../images/About-us/Overline Mark Purple.svg'

function About() {
  const { t } = useTranslation()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Container fluid>
      <Row className="All pt-5">
        <Col lg={6} md={12} className="cardcontrol  text-center mt-5 pt-3   ">
          {' '}
          <Card className="cardCol pt-1 " data-aos="zoom-in">
            <Card.Body className="pl-5  pr-2 pb-5  mt-3">
              <Card.Title className="pl-1 d-flex flex-end">
                <img src={OverlineMark} className="im" alt="OverlineMark" />
                <h6 className="pl-1 pt-2   title1">
                  {t('Aboutus.who we are')}
                </h6>
              </Card.Title>

              <Card.Text className="p-1 pr-5  ">
                <h1 className="title pb-2">{t('Aboutus.text1')}</h1>
                <p className=" about d-flex justify-content-center">
                  {t('Aboutus.text2')}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <img
            src={Im}
            className="catIm   img-fluid"
            data-aos="zoom-in"
            alt=""
          />
        </Col>
        <Col lg={1}>{}</Col>
      </Row>
      <Row className=" All pt-3 pb-4 cards pl-5 d-flex flex-end pt-4">
        <img src={OverlineMarkIconPurple} alt="OverlineMark" className="im" />
        <h5 className="pt-2 text-uppercase font-weight-light ">
          {t('Aboutus.story')}
        </h5>
      </Row>
      <Row className="cards pt-4 pb-5 ">
        <Col
          lg={4}
          md={6}
          sm={12}
          className="d-flex justify-content-center pl-3 pr-3 pb-3"
        >
          <Card className="card1 w-75 pl-3 pr-3 " data-aos="zoom-in">
            <Card.Body className="">
              <Card.Title className="text-center textpink1">
                {t('Aboutus.brono')}
              </Card.Title>
              <Card.Text>
                <h5 className="cardtext">{t('Aboutus.text4')}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col
          lg={4}
          md={6}
          sm={12}
          className="d-flex justify-content-center pb-3"
        >
          <Card className="card1 w-75 pl-3 pr-3" data-aos="zoom-in">
            <Card.Body className="">
              <Card.Title className="text-center textpink1">
                {t('Aboutus.bear')}
              </Card.Title>

              <Card.Text>
                <h5 className="cardtext">{t('Aboutus.text5')}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={4}
          md={6}
          sm={12}
          className="d-flex justify-content-center pb-3 "
        >
          <Card className="card1 w-75 pl-3 pr-3 " data-aos="zoom-in">
            <Card.Body className="">
              <Card.Title className="text-center textpink1">
                {t('Aboutus.milo')}
              </Card.Title>
              <Card.Text>
                <h5 className="cardtext">{t('Aboutus.text6')}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="extra pt-5 pl-5 d-flex flex-end ">
        <img src={OverlineMarkIconPurple} alt="OverlineMark" className="im" />{' '}
        <h5 className="pt-2 text-uppercase font-weight texts">
          {t('Aboutus.ourimpact')}
        </h5>
      </Row>
      <Row className="impact-section pb0t ">
        <Col lg={1}>{}</Col>
        <Col
          lg={5}
          md={12}
          sm={12}
          xs={12}
          className="pt-5 d-flex justify-content-center"
        >
          <div className="pt-5 ">
            {' '}
            <h2 className="texts pt-3" data-aos="fade-down">
              {t('Aboutus.we can save them')}
            </h2>
            <h1 className="texts pt-1" data-aos="fade-down">
              {t('Aboutus.We can have impact')}
            </h1>
            <h2 className="texts pt-1" data-aos="fade-down">
              {t('Aboutus.see our impact')}
            </h2>
          </div>
        </Col>
        <Col lg={5} md={12} sm={12} className="text-center ">
          <img
            src={im2}
            className="img-fluid blob  pl-5"
            data-aos="zoom-out"
            alt=""
          />
        </Col>
        <Col lg={1}>{}</Col>
      </Row>
      <Row className="icons pt-3 pb-5 ">
        <Col className="text-center " lg={3} md={6} sm={6} xs={6}>
          <img src={PuppyBath} alt="PuppyBath" data-aos="zoom-in" />
          <h2 className=" font-weight-bold texts ">{t('Aboutus.3700')}</h2>
          <p className="title-our-impact-services font-weight-bold mt-3 textpink">
            {t('Aboutus.puppy baths')}
          </p>
        </Col>
        <Col className="text-center " lg={3} md={6} sm={6} xs={6}>
          <img src={DogsBoard} alt="DogsBoard" data-aos="zoom-in" />{' '}
          <h2 className=" text-white font-weight-bold texts ">
            {t('Aboutus.4500')}
          </h2>
          <p className="title-our-impact-services font-weight-bold textpink ">
            {t('Aboutus.dogs boarded')}
          </p>
        </Col>
        <Col className="text-center " lg={3} md={6} sm={6} xs={6}>
          <img src={PupsTrained} alt="PupsTrained" data-aos="zoom-in" />{' '}
          <h2 className="font-weight-bold texts">{t('Aboutus.2900')}</h2>
          <p className="title-our-impact-services font-weight-bold textpink ">
            {t('Aboutus.pups trained')}
          </p>
        </Col>
        <Col className="text-center" lg={3} md={6} sm={6} xs={6}>
          <img src={MealsServed} alt="MealsServed" data-aos="zoom-in" />
          <h2 className=" font-weight-bold texts ">{t('Aboutus.12000')}</h2>
          <p className=" font-weight-bold textpink ">
            {t('Aboutus.meals served')}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
