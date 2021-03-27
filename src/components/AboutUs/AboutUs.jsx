import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatNextToRectangle from '../../images/About-us/CatNextToRectangle.svg'
import RectangleAboutUs from '../../images/About-us/RectangleAboutUs.svg'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import OverlineMarkIconPurple from '../../images/About-us/Overline Mark Purple.svg'
import ServiceRectangle from '../../images/About-us/service rectangle.svg'
import StoryPic from '../../images/About-us/storypic (1).svg'
import StoryPic2 from '../../images/About-us/storypic (2).svg'

import './AboutUs.css'

function AboutUs() {
    return (
        <div>
            {/* first section */}
            <Container className="mt-5">
                <Row>
                    <Col className="rectangle mb-4 mr-5 d-flex align-items-center">
                        {' '}
                        <img src={RectangleAboutUs} alt="about-us-rectangle" />
                        <Container className="w-100 position-absolute text-left ml-5 text-light">
                            <h6 className="main-title">
                                <img src={OverlineMark} alt="OverlineMark" />{' '}
                                Who we are
                            </h6>
                            <h2 className="about-us-outline ml-2 mt-4">
                                We Are a Paw Project Team Working from Re:Coded
                            </h2>
                            <p className="about-us-text ml-5 mt-3">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit
                                laboriosam, nisi ut aliquid ex ea commodi
                                consequatur. Quis autem vel eum iure
                                reprehenderit qui in ea voluptate velit esse
                                quam nihil molestiae consequatur, vel illum qui
                                dolorem eum fugiat quo voluptas nulla pariatur.
                            </p>
                        </Container>
                    </Col>
                    <Col className="cat-pic">
                        {' '}
                        <img src={CatNextToRectangle} alt="about-us-cat-pic" />
                    </Col>
                </Row>
            </Container>
            {/* Second Section */}
            <Container className="grey-bg">
                <Row className="story-section">
                    <Col>
                        <h6 className="main-title-s2 ml-5">
                            <img
                                src={OverlineMarkIconPurple}
                                alt="OverlineMark"
                            />{' '}
                            Story
                        </h6>
                        <img
                            className="service1"
                            src={ServiceRectangle}
                            alt="serviceRectangle"
                        />{' '}
                        <p className="position-absolute text-dark box-text ml-5">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore ex magna aliqua. Ut enim illum ad minim
                            veniam, quis ea exercitation ullamco cillum ut enim
                            dolore.”
                        </p>
                        <img
                            className="service1"
                            src={ServiceRectangle}
                            alt="serviceRectangle"
                        />{' '}
                        <p className="position-absolute text-dark box-text2">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore ex magna aliqua. Ut enim illum ad minim
                            veniam, quis ea exercitation ullamco cillum ut enim
                            dolore.”
                        </p>
                        <img
                            className="w-10  position-absolute story-pic2"
                            src={StoryPic2}
                            alt="StoryPic2"
                        />{' '}
                        <img
                            className="w-10 position-absolute story-pic"
                            src={StoryPic}
                            alt="StoryPic"
                        />{' '}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutUs
