import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CatNextToRectangle from '../../images/About-us/CatNextToRectangle.svg'
import RectangleAboutUs from '../../images/About-us/RectangleAboutUs.svg'
import OverlineMark from '../../images/About-us/Overline Mark.svg'
import OverlineMarkIconPurple from '../../images/About-us/Overline Mark Purple.svg'
import ServiceRectangle from '../../images/About-us/service rectangle.svg'
import StoryPic from '../../images/About-us/storypic (1).svg'
import StoryPic2 from '../../images/About-us/storypic (2).svg'
import Blob from '../../images/About-us/Blob 2.svg'
import PuppyBath from '../../images/About-us/dog_grooming_24x.svg'
import DogsBoard from '../../images/About-us/dog_stream_24x.svg'
import PupsTrained from '../../images/About-us/dog_love_24x.svg'
import MealsServed from '../../images/About-us/dog_vet_24x.svg'

import CardSection from '../../containers/AboutPage/CardSection'
import './AboutUs.css'

function AboutUs() {
    return (
        <Container fluid>
            {/* first section */}
            <Row className="about-us-section ml-3 mt-3">
                <Col className="rectangle mb-4 ml-5 d-flex align-items-center">
                    {' '}
                    <img src={RectangleAboutUs} alt="about-us-rectangle" />
                    <Container className="w-75 position-absolute ml-4 text-light">
                        <h6 className="main-title">
                            <img src={OverlineMark} alt="OverlineMark" /> Who we
                            are
                        </h6>
                        <h2 className="about-us-outline ml-3 mt-4">
                            We Are a Paw Project Team Working from Re:Coded
                        </h2>
                        <p className="about-us-text ml-5 mt-3">
                            Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur. Quis
                            autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel
                            illum qui dolorem eum fugiat quo voluptas nulla
                            pariatur.
                        </p>
                    </Container>
                </Col>
                <Col className="cat-pic">
                    {' '}
                    <img src={CatNextToRectangle} alt="about-us-cat-pic" />
                </Col>
            </Row>

            {/* Story Section */}
            <Row className="story-section grey-bg">
                <Col>
                    <h6 className="main-title-s2 ml-5">
                        <img src={OverlineMarkIconPurple} alt="OverlineMark" />{' '}
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
                        dolore ex magna aliqua. Ut enim illum ad minim veniam,
                        quis ea exercitation ullamco cillum ut enim dolore.”
                    </p>
                    <img
                        className="service1"
                        src={ServiceRectangle}
                        alt="serviceRectangle"
                    />{' '}
                    <p className="position-absolute text-dark box-text2">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore ex magna aliqua. Ut enim illum ad minim veniam,
                        quis ea exercitation ullamco cillum ut enim dolore.”
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
            {/* our impact Section */}
            <Row className="our-impact">
                <Col
                    md="4"
                    className="w-50 position-absolute text-light our-impact-title"
                >
                    {' '}
                    <h6 className="main-title ml-2">
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
                    <img src={Blob} alt="Blob" />
                </Col>{' '}
                <Col className="our-service our-ser-1" md={2}>
                    <Row>
                        <Col>
                            {' '}
                            <img src={PuppyBath} alt="PuppyBath" />{' '}
                        </Col>
                        <Col>
                            <h2 className="title-our-impact-services-number">
                                3,700
                            </h2>
                            <p className="title-our-impact-services">
                                puppy baths
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className=" our-service our-ser-2" md={2}>
                    <Row>
                        <Col>
                            <img src={DogsBoard} alt="DogsBoard" />{' '}
                        </Col>
                        <Col>
                            <h2 className="title-our-impact-services-number">
                                4,500
                            </h2>
                            <p className="title-our-impact-services">
                                dogs boarded
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="our-service our-ser-3" md={2}>
                    <Row>
                        <Col>
                            <img src={PupsTrained} alt="PupsTrained" />{' '}
                        </Col>
                        <Col>
                            <h2 className="title-our-impact-services-number">
                                2,900
                            </h2>
                            <p className="title-our-impact-services">
                                pups trained
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col className="our-service our-ser-4" md={2}>
                    <Row>
                        <Col>
                            <img src={MealsServed} alt="MealsServed" />{' '}
                        </Col>
                        <Col>
                            <h2 className="title-our-impact-services-number">
                                12K+
                            </h2>
                            <p className="title-our-impact-services">
                                meals served
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* our members */}
            <Row className="our-members-section">
                <Col>
                    <h6 className="main-title-s2 ml-5 mt-4">
                        <img src={OverlineMarkIconPurple} alt="OverlineMark" />{' '}
                        Our members
                    </h6>
                </Col>
            </Row>
            <CardSection />
        </Container>
    )
}

export default AboutUs
