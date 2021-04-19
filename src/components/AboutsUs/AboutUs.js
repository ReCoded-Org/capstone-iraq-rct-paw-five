import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatNextToRectangle from '../../images/About-us/CatNextToRectangle.svg'
import RectangleAboutUs from '../../images/About-us/RectangleAboutUs.svg'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import OverlineMarkIconPurple from '../../images/About-us/Overline Mark Purple.svg'
import Blob from '../../images/About-us/Blob 2.svg'
import PuppyBath from '../../images/About-us/dog_grooming_24x.svg'
import DogsBoard from '../../images/About-us/dog_stream_24x.svg'
import PupsTrained from '../../images/About-us/dog_love_24x.svg'
import MealsServed from '../../images/About-us/dog_vet_24x.svg'

import CardSection from '../../containers/CardSection/Card'
import '../../App.css'

function AboutUs() {
  return (
    <Container fluid>
      {/* first section */}
      <Row className="about-us-section mt-4 px-4">
        <Col
          lg={6}
          sm={12}
          xs={12}
          className="rectangle d-flex align-items-center"
        >
          {' '}
          <img
            src={RectangleAboutUs}
            alt="about-us-rectangle"
            className=" rec-pic"
          />
          <Container className="w-75 position-absolute text-light txt-box">
            <h6 className="main-title ml-3 mt-3 text-uppercase font-weight-light">
              <img src={OverlineMark} alt="OverlineMark" /> Who we are
            </h6>
            <h2 className="about-us-outline ml-3">
              We Are a Paw Project Team Working from Re:Coded
            </h2>
            <p className="about-us-text ml-5">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam nisi ut aliquid ex ea commodi
              consequatur. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
            </p>
          </Container>
        </Col>
        <Col lg={6} sm={12} xs={12} className="">
          {' '}
          <img
            src={CatNextToRectangle}
            alt="about-us-cat-pic"
            className="cat-pic"
          />
        </Col>
      </Row>

      {/* Story Section */}
      <Row className="story-section grey-bg px-5 py-3">
        <h6 className="main-title-s2 ml-5 text-uppercase font-weight-light">
          <img src={OverlineMarkIconPurple} alt="OverlineMark" /> Story
        </h6>
        <Col lg={3} md={12} sm={12} xs={12}>
          <Container className="box-part my-5 h-75 rounded">
            <p className="w-75 mx-3">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut
              enim illum ad minim veniam, quis ea exercitation ullamco cillum ut
              enim dolore.”
            </p>
          </Container>
        </Col>
        <Col lg={3} md={6} sm={12} xs={12}>
          <Container className="box-part my-5 h-75 rounded">
            <p className="w-75 mx-3">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut
              enim illum ad minim veniam, quis ea exercitation ullamco cillum ut
              enim dolore.”
            </p>
          </Container>
        </Col>
        <Col className="box-col" lg={3} md={6} sm={12} xs={12}>
          <Container className="box-part my-5 h-75 rounded">
            <p className="w-75 mx-3">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut
              enim illum ad minim veniam, quis ea exercitation ullamco cillum ut
              enim dolore.”
            </p>
          </Container>
        </Col>
      </Row>
      {/* our impact Section */}
      <Row className="our-impact">
        <Row className="">
          <Col
            md="4"
            className="w-50 position-absolute text-light our-impact-title"
          >
            {' '}
            <h6 className="main-title ml-2 text-uppercase font-weight-light">
              <img src={OverlineMark} alt="OverlineMark" /> Our impact
            </h6>
            <h2 className="about-us-outline ml-3 mt-4">
              We Are a Paw Project Team Working from Re:Coded
            </h2>
          </Col>
          <Col
            md={{ span: 4, offset: 5 }}
            className="position-absolute our-impact-blob"
          >
            <img src={Blob} alt="Blob" className="blob-pic" />
          </Col>{' '}
        </Row>
        <Row className="icons im2">
          <Col className="our-service our-ser-1 ml-5" md={2}>
            <Row>
              <Col>
                {' '}
                <img src={PuppyBath} alt="PuppyBath" />{' '}
              </Col>
              <Col>
                <h2 className="title-our-impact-services-number text-white font-weight-bold mt-1">
                  3,700
                </h2>
                <p className="title-our-impact-services font-weight-bold mt-3">
                  puppy baths
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="our-service our-ser-2 ml-5" md={2}>
            <Row>
              <Col>
                <img src={DogsBoard} alt="DogsBoard" />{' '}
              </Col>
              <Col>
                <h2 className="title-our-impact-services-number text-white font-weight-bold  mt-1">
                  4,500
                </h2>
                <p className="title-our-impact-services font-weight-bold mt-3">
                  dogs boarded
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="our-service our-ser-3  ml-5" md={2}>
            <Row>
              <Col>
                <img src={PupsTrained} alt="PupsTrained" />{' '}
              </Col>
              <Col>
                <h2 className="title-our-impact-services-number text-white font-weight-bold  mt-1">
                  2,900
                </h2>
                <p className="title-our-impact-services font-weight-bold mt-3">
                  pups trained
                </p>
              </Col>
            </Row>
          </Col>
          <Col className="our-service our-ser-4 ml-5" md={2}>
            <Row>
              <Col>
                <img src={MealsServed} alt="MealsServed" />{' '}
              </Col>
              <Col>
                <h2 className="title-our-impact-services-number text-white font-weight-bold  mt-1">
                  12K+
                </h2>
                <p className="title-our-impact-services font-weight-bold mt-3">
                  meals served
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      {/* our members */}
      <Row className="our-members-section m-3">
        <Col>
          <h6 className="main-title-s2 ml-5 mt-4 text-uppercase font-weight-light">
            <img src={OverlineMarkIconPurple} alt="OverlineMark" /> Our members
          </h6>
        </Col>
      </Row>
      <CardSection />
    </Container>
  )
}

export default AboutUs
