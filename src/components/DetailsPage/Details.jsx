/* eslint-disable jsx-a11y/label-has-associated-control */
import { Row, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../../App.css'
import im1 from '../../images/details-page/Rectangle 68.svg'
import im2 from '../../images/details-page/Rectangle 79.svg'
import im3 from '../../images/details-page/Rectangle 80.svg'
import im4 from '../../images/details-page/image 15.svg'

function Detail() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2 className="row justify-content-center pt-5 pb-5 " id="colorset1">
            pet Details
          </h2>
        </Col>
      </Row>
      <Row className=" pr-3 pb-5">
        {/** image column */}
        <Col>{}</Col>
        <Col lg={5} sm={12} md={12} xs={12} className="pt-3 ">
          {' '}
          <img src={im1} alt="" className="main-image img-fluid " />
        </Col>
        {/** image column */}

        <Col lg={5} className="pb-5">
          <h3 className="pb-5 pt-3 tips" id="colorset1">
            some tips to care about your pit
          </h3>
          <label className="label" id="colorset">
            story:
          </label>
          <span className="span text pb-5">
            The history of pets is intertwined with the process of animal d
            omestication, and it is likely that the dog, as the first
            domesticated species, was also the first pet. Perhaps the initial
            steps toward domestication were taken largely through the widespread
            human practice of making pets of captured young wild animals.
          </span>
          <div className="pt-4">
            <label className="label" id="colorset">
              species:{' '}
            </label>
            <span className="span text  pt-5">
              gs are highly unusual in their variation, from the Chihuahua to
              the Great Dane.
            </span>
          </div>
          <div>
            <Row className="pt-5 ">
              <Col>
                <label className="label" id="colorset">
                  Age:
                </label>
                <span className="pl-2">21</span>
              </Col>
              <Col>
                <label className="label" id="colorset">
                  size:
                </label>
                <span className="span pl-2">23</span>
              </Col>
              <Col>
                <label className="label" id="colorset">
                  gender:
                </label>
                <span className="span pl-2">male</span>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="pt-5">
              <Col>
                <label className="label" id="colorset">
                  weight:
                </label>
                <span className="span pl-2">19</span>
              </Col>

              <Col>
                <label className="label" id="colorset">
                  color:
                </label>
                <span className="pl-2">gray</span>
              </Col>
              <Col>{}</Col>
            </Row>
          </div>
        </Col>
        <Col>{}</Col>
      </Row>
      {/** contact info */}

      <Row id="contact-header">
        <Col>
          <h2 className="row justify-content-center pt-5 pb-5 " id="colorset1">
            Contact info
          </h2>
        </Col>
      </Row>
      <Row className="contactinfo pb-5 ">
        <Col>{}</Col>

        <Col lg={8} md={12} sm={12}>
          <div>
            <label className="label" id="colorset">
              name:{' '}
            </label>
            <span className="span pl-2">Ali Mustafa</span>
          </div>
          <div className="pt-3">
            <label className="label" id="colorset">
              About:{' '}
            </label>
            <span className="pl-2 pr-5 ">
              Despite their radically different appearances, all domestic dogs
              are still genetically the same species. In a word, All domestic
              dog breeds are able to interbreed to give birth to reproductively
              viable offspring. Despite their radically different appearances,
              all domestic dogs are still genetically the same species. In a
              word, All domestic dog breeds are able to interbreed to give birth
              to reproductively viable offspring.
            </span>
          </div>
          <div className="pt-3">
            <label className="label" id="colorset">
              Location:
            </label>
            <span className="pl-2">Erbil</span>
          </div>
          <div className="pt-3">
            <label className="label" id="colorset">
              Email:
            </label>
            <span className="pl-2">ali.00622274@gmail.com</span>
          </div>
          <div className="pt-3">
            <label className="label" id="colorset">
              phone number:
            </label>
            <span className="pl-2">0750111111</span>
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
            Pet Gallery
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
    </Container>
  )
}

export default Detail
