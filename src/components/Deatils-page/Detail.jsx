/* eslint-disable jsx-a11y/label-has-associated-control */
import { Row, Container, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Detail.css'
import im1 from '../../images/details-page/Rectangle 68.svg'
import im2 from '../../images/details-page/Rectangle 79.svg'
import im3 from '../../images/details-page/Rectangle 80.svg'
import im4 from '../../images/details-page/Rectangle 81.svg'
import { db } from '../../firebase'

function Detail() {
    const [data, setData] = useState([])
    useEffect(() => {
        db.collection('pets').onSnapshot((snapshot) => {
            setData(snapshot.docs.map((doc) => doc.data()))
        })
    })

    return (
        <div>
            {data.map((detail) => (
                <p style={{ display: 'none' }}>{detail.age}</p>
            ))}
            <Container fluid>
                <h2 className="pl-5 pt-5 ">pet info</h2>
                <Row className="p-5">
                    <Col lg={6}>
                        {' '}
                        <img
                            src={im1}
                            alt=""
                            className="main-image img-fluid p-5"
                        />
                    </Col>
                    <Col lg={6}>
                        <h2 className="pb-5 pt-5 tips">
                            some tips to care about your pit
                        </h2>
                        <label className="label">
                            story:
                            <span className="span text pb-5">
                                The history of pets is intertwined with the
                                process of animal d omestication, and it is
                                likely that the dog, as the first domesticated
                                species, was also the first pet. Perhaps the
                                initial steps toward domestication were taken
                                largely through the widespread human practice of
                                making pets of captured young wild animals.
                            </span>
                        </label>
                        <div className="pt-5">
                            <label className="label">
                                species:{' '}
                                <span className="span text  pt-5">
                                    gs are highly unusual in their variation,
                                    from the Chihuahua to the Great Dane.
                                </span>
                            </label>
                        </div>
                        <div>
                            <Row className="pt-5 ">
                                <Col>
                                    <label className="label">
                                        Age:{' '}
                                        <span className="span text">21</span>
                                    </label>
                                </Col>
                                <Col>
                                    <label className="label">
                                        size:{' '}
                                        <span className="span text">23</span>
                                    </label>
                                </Col>
                                <Col>
                                    <label className="label">
                                        gender:{' '}
                                        <span className="span text">male</span>
                                    </label>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className="pt-5">
                                <Col>
                                    <span className="label">
                                        weight:{' '}
                                        <span className="span text">19</span>
                                    </span>
                                </Col>
                                <Col>
                                    <span className="label">
                                        color:{' '}
                                        <span className="span text">gray</span>
                                    </span>
                                </Col>
                                <Col>{}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row className="contactinfo pt-5 pl-5 pb-5">
                    <Col>
                        <h2 className="pb-5">Contact Info</h2>

                        <div>
                            <label className="label ">
                                name:{' '}
                                <span className="span text">Ali Mustafa</span>
                            </label>
                        </div>
                        <div className="pt-3">
                            <label className="label">
                                About:{' '}
                                <span className="span text pr-5 ">
                                    Despite their radically different
                                    appearances, all domestic dogs are still
                                    genetically the same species. In a word, All
                                    domestic dog breeds are able to interbreed
                                    to give birth to reproductively viable
                                    offspring.
                                </span>
                            </label>
                        </div>
                        <div className="pt-3">
                            <label className="label">
                                Location:{' '}
                                <span className="span text">Erbil</span>
                            </label>
                        </div>
                        <div className="pt-3">
                            <label className="label">
                                Email:{' '}
                                <span className="span text">
                                    ali.00622274@gmail.com
                                </span>
                            </label>
                        </div>
                        <div className="pt-3">
                            <label className="label">
                                phone number:{' '}
                                <span className="span text">0750111111</span>
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row className="pet-gallery">
                    {' '}
                    <h2 style={{ color: 'white' }} className=" pt-5 pl-5">
                        Pet Gallery
                    </h2>
                </Row>
                <Row className="pet-gallery pt-5 pb-5">
                    <Col>
                        <img
                            src={im2}
                            sm={4}
                            className="img-fluid img "
                            alt=""
                        />
                    </Col>

                    <Col sm={4}>
                        <img src={im3} className="img-fluid img " alt="" />
                    </Col>

                    <Col sm={4}>
                        <img src={im4} className="img-fluid img " alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail
