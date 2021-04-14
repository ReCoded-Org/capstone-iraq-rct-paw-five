import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RectangleAboutUs from '../../images/About-us/RectangleAboutUs.svg'
import CardSection from '../../containers/CardSection/Card'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import CatNextToRectangle from '../../images/About-us/CatNextToRectangle.svg'
import '../../App.css'

function AboutUs() {
  return (
    <Container fluid>
      {/* first section */}
      <Row>
        <Col lg={6}>
          <Col className="d-flex align-items-center">
            {' '}
            <img
              src={RectangleAboutUs}
              className="im2"
              alt="about-us-rectangle"
            />
            <Container className="position-absolute  text-light">
              <h6 className="main-title">
                <img src={OverlineMark} alt="OverlineMark" /> Who we are
              </h6>
              <h2 className="">
                We Are a Paw Project Team Working from Re:Coded
              </h2>
              <p className="">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur. Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur.
              </p>
            </Container>
          </Col>
        </Col>
        <Col lg={6}>
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
