import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RectangleAboutUs from '../../images/About-us/RectangleAboutUs.svg'
import CardSection from '../../containers/CardSection/Card'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import CatNextToRectangle from '../../images/About-us/CatNextToRectangle.svg'
import '../../App.css'
import './AboutUs.css'

function AboutUs() {
  return (
    <Container fluid>
      {/* first section */}
      <Row>
        <Col className="" lg={6} xs={12} sm={12}>
          <Col className="d-flex align-items-center box">
            {' '}
            <img
              src={RectangleAboutUs}
              className="im2"
              alt="about-us-rectangle"
            />
            <Container className="position-absolute text-light txt-box">
              <h6 className="main-title mx-3">
                <img src={OverlineMark} alt="OverlineMark" /> Who we are
              </h6>
              <h2 className="second-title mx-2">
                We Are a Paw Project Team Working from Re:Coded
              </h2>
              <p className="paragraph-text mx-5">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, aliquid ex ea commodi consequatur.
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                fugiquo voluptas nulla pariatur.
              </p>
            </Container>
          </Col>
        </Col>
        <Col className="box2" xs={12} lg={6} sm={8}>
          {' '}
          <img
            src={CatNextToRectangle}
            className="im3 img-fluid"
            alt="about-us-cat-pic"
          />
        </Col>
      </Row>

      {/* Card Section */}
      <Row>
        <CardSection />
      </Row>
    </Container>
  )
}

export default AboutUs
