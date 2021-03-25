import React from 'react'
import emailjs from 'emailjs-com'
import { Formik, Form } from 'formik';
import './ContactUs.css'
import {
    Container,
    Row,
    Col,
    ResponsiveEmbed,
    Form,
    Button,
} from 'react-bootstrap'

export default function ContactUs() {
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_vg9bk5b',
                'template_snre7hs',
                e.target,
                'user_E56W1Sop4bo4PGpuGBxld'
            )
            .then(
                (result) => {
                    console.log(result.text)
                },
                (error) => {
                    console.log(error.text)
                }
            )
        e.target.reset()
    }

    return (
        <div className=" justify-content-center">
            <Container className="d-felx mt-5 justify-content-center">
                <Row className="d-felx justify-content-center">
                    <Col  md="10" lg="6" xs="12" sm="12">
                        <Container  className="contactus">
                            <Container align="center" className="m-4">
                                <h3 className="mb-0 title_contactus">
                                    Contact Us
                                </h3>
                            </Container>
                            <Container  className="card-body">
                                <Form
                                    className="form"
                                    onSubmit={sendEmail}
                                    autoComplete="off"
                                >
                                    <fieldset>
                                        <Container className="row m-1 ">
                                            <Container className="col-lg-6 col-md-6 mb-4">
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="Name"
                                                    required
                                                />
                                            </Container>
                                            <Container className="col-lg-6 col-md-6 mb-4 ">
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                          
                                                />
                                            </Container>
                                        </Container>
                                        <Container className="row m-1 ">
                                            <Container className="col-lg-6 col-md-6 mb-4 ">
                                                <Form.Control
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone"
                                             
                                                />
                                            </Container>
                                            <Container className="col-lg-6 col-md-6 mb-4 ">
                                                <Form.Control
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                   
                                                    required
                                                />
                                            </Container>
                                        </Container>

                                        <Container className="row m-1 mb-4">
                                            <Container className="col-lg-12">
                                                <textarea
                                                    rows="6"
                                                    name="message"
                                                    placeholder="Message"
                                                    id="message2"
                                                    className="form-control"
                                                    required
                                                />
                                            </Container>
                                        </Container>
                                        <Button
                                            type="submit"
                                            className="btn  btn-lg submitButton float-right"
                                        >
                                            Submit
                                        </Button>
                                    </fieldset>
                                </Form>
                            </Container>
                        </Container>
                    </Col>
                    <Col
                        md="12"
                        lg="6"
                        xs="12"
                        sm="12"
                        align="center"
                        className="align-self-center mt-4 text"
                        
                    >
                        <h4>Maxime placeat facere possimus omnis </h4>
                        <h1>5,700+</h1>
                        <h6>customers served</h6>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="mt-5 mb-5 ">
                    <ResponsiveEmbed className="mapHeight" aspectRatio="16by9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13336.605883119555!2d44.3770677!3d33.3148553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x927ea3c6fb5cd552!2sAl-Zawraa%20Park!5e0!3m2!1sen!2siq!4v1616624591055!5m2!1sen!2siq"
                            title="map"
                            height="450"
                            loading="lazy"
                        />
                    </ResponsiveEmbed>
                </Row>
            </Container>
        </div>
    )
}
