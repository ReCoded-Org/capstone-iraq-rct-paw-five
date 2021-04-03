import React, { useEffect, useState } from 'react'

import { Col, Row, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTranslation } from 'react-i18next'
import { useSelector} from 'react-redux'

import {
    faBraille,
    faQuoteLeft,
    faQuoteRight,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {
    ADOPT_ROUTE,
    ADD_APET_ROUTE,
} from '../../routes'
import firebase from '../../firebase'
import PetCard from '../../components/HomePetCard/HomePetCard'
import Slider from '../../components/Slider/Slider'
import logo from '../../images/home-page/logo.ico'
import HP1 from '../../images/home-page/hp1.png'
import HP2 from '../../images/home-page/hp2.png'
import HP3 from '../../images/home-page/hp3.png'
import v from '../../video/v1.mp4'

export default function Home() {
    const globaleLang = useSelector(state => state.langReducer)
    const { t } = useTranslation()

    const [dir, setDir] = useState('ltr')

    const changeDir = () => {
        if (
            globaleLang!== 'en' &&
            globaleLang !== null
        ) {
            setDir('rtl')
        } else {
            setDir('ltr')
        }
    }


    function getUniqueListBy(arr, key) {
        return [...new Map(arr.map((item) => [item[key], item])).values()]
    }

    const [pets, setPets] = useState([])
    const [type, setType] = useState([])
    const [location, setLocation] = useState([])
    const [age, setAge] = useState([])
    const [selectedType, setselectedType] = useState('')
    const [selectedCity, setselectedCity] = useState('')
    const [selectedAge, setselectedAge] = useState('')

    console.log(selectedType)
    console.log(selectedCity)
    console.log(selectedAge)



    useEffect(() => {
        const allType = firebase
            .firestore()
            .collection('pets')
            .where('species', '!=', null)
            .onSnapshot((shnapshot) => {
                const newType = shnapshot.docs.map((doc) => ({
                    species: doc.data().species,
                }))
                const Newlocation = shnapshot.docs.map((doc) => ({
                    city: doc.data().city,
                }))
                const newAge = shnapshot.docs.map((doc) => ({
                    age: doc.data().age,
                }))

                setType(getUniqueListBy(newType, 'species'))
                setLocation(getUniqueListBy(Newlocation, 'city'))
                setAge(getUniqueListBy(newAge, 'age'))
            })

        const lastThreePets = firebase
            .firestore()
            .collection('pets')
            .orderBy('age')
            .limit(3)
            .onSnapshot((shnapshot) => {
                const newPets = shnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setPets(newPets)
            })
        return () => {
            lastThreePets()
            allType()
        }
    }, [])

    useEffect(() => {
        changeDir()
    }, [globaleLang])
    return (
        <div dir="ltr">
            <Row
                className="video-parant position-relative home-image img-fluid d-flex justify-content-center mx-0 p-2 "
                style={{ height: '470px' }}
            >
                <video autoPlay loop muted className="video-child position-absolute" poster="video.jpg">
                    <source src={v} type="video/mp4" />
                </video>

                <Row className=" w-100 mx-0 my-5">
                    <Col className=" col-lg-4 col-md-8 col-sm-12 text-left ">
                        <p className="text-light text-center mx-0 mt-5 h1 text-sh ">
                            {/* Adopt a Pet today! */}
                            {t('homepage.heading.tilte')}
                        </p>

                        <p className="text-light text-center mx-0 mt-5 h4 text-sh  ">
                        {t('homepage.heading.descrption')}
                            {/* Search out list of dogs, and cats availabe for
                            adoption near you{' '} */}
                        </p>
                    </Col>
                </Row>
                <Row className=" w-100 mb-5 mx-0  ">
                    <Col className="d-flex col-lg-6 col-md-12 col-sm-12 ">
                        <input
                            type="text"
                            list="city"
                            className=" first-input text-size outline   w-25 py-3 px-2 m-auto"
                            placeholder={t('homepage.inputs.city')}
                            onChange={(e)=>setselectedCity(e.target.value)}
                            multiple
                        />
                        <datalist id="city">
                            {location
                                ? location.map((e) => (
                                      <option key={e.city} aria-label="k" value={e.city}>
                                          {e.city}
                                      </option>
                                  ))
                                : 'd'}
                        </datalist>
                        <input
                            type="age"
                            list="age"
                            className=" border-0 text-size outline  w-25 py-3 px-2 m-auto"
                            placeholder={t('homepage.inputs.age')}
                            onChange={(e)=>setselectedAge(e.target.value)}
                            multiple
                        />
                        <datalist id="age">
                            {age
                                ? age.map((e) => (
                                      <option key={e.age} aria-label="k" value={e.age}>
                                          {e.age}
                                      </option>
                                  ))
                                : 'd'}
                        </datalist>

                        <input
                            type="text"
                            list="type"
                            className=" border-0 text-size outline  w-25 py-3 px-2 m-auto"
                            placeholder={t('homepage.inputs.type')}
                            onChange={(e)=>setselectedType(e.target.value)}
                            multiple
                        />
                        <datalist id="type">
                            {type
                                ? type.map((e) => (
                                      <option key={e.species} aria-label="k" value={e.species}>
                                          {e.species}
                                      </option>
                                  ))
                                : 'd'}
                        </datalist>
                        <Link
                        
                        as={Link} 
                        to={{ pathname: ADOPT_ROUTE, query: { city: selectedCity, age:selectedAge, type:selectedType } }}
                        params={{ testvalue: "hello" }}
                            style={{ backgroundColor: '#f2726f' }}
                            className="last-input text-size border-0 text-light text-center m-auto w-25 py-3 px-1 "
                            
                        >{t('homepage.inputs.find')}</Link>

                        <Link
                        as={Link} to={ADD_APET_ROUTE}
                            style={{ color: '#f2726f' }}
                            className=" bg-white text-size home-btn my-auto ml-5 text-center  w-25 border-0 shadow-none   py-3 px-1"
                            
                        >{t('homepage.inputs.adopt')}</Link>
                    </Col>
                </Row>
            </Row>
            <Container dir={dir}
                fluid
                style={{ backgroundColor: '#f2f2f2' }}
                className="mt-0 m-0"
            >
                <Container align="center" className="my-0 py-2 m-0" fluid>
                    <Row className="container-fluid m-0 h4 my-5 text-danger">
                        <FontAwesomeIcon
                            icon={faBraille}
                            className="text-warning"
                        />{' '}
                        {t('homepage.recentpet')}
                    </Row>
                    <Row className="d-flex justify-content-center m-0">
                        <PetCard pet={pets[0]} />
                        <PetCard pet={pets[1]} />
                        <PetCard pet={pets[2]} />
                    </Row>{' '}
                    <Button
                    as={Link} to={ADOPT_ROUTE}
                        className=" home-input home-btn px-5 py-3 mb-5 border-0 shadow-none"
                        style={{ backgroundColor: '#f2726f' }}
                    >
                        {' '}
                        {t('homepage.seemore')}
                    </Button>{' '}
                </Container>
            </Container>

            <Container fluid className="theme-color pb-5 text-light">
                <Row className="d-flex align-items-center">
                    <Col className="text-center" lg={12} md={12} sm={12}>
                        <img
                            src={logo}
                            className="pt-3 img-fluid  p-0"
                            alt=""
                            style={{width:'6%'}}
                        />
                    </Col>
                    <Col className="text-center " lg={12} md={12} sm={12}>
                        {' '}
                        <h5 className="pb-4">{t('homepage.welcome')}</h5>
                    </Col>

                    <Col
                        className="  text-center align-self-center"
                        lg={6}
                        md={6}
                        sm={12}
                    >
                        <img
                            src="https://www.scottsdalepethotel.com/wp-content/uploads/2019/06/dogscats.jpg"
                            className="img-fluid "
                            alt=""
                            style={{borderRadius:"20px "}}
                        />
                    </Col>

                    <Col
                        className="m-0 text-center align-self-center"
                        lg={6}
                        md={6}
                        sm={12}
                    >
                        <h3>{t('homepage.whoweare.whoweare')}</h3>
                        <h5>
                        {t('homepage.whoweare.title')}
                        </h5>
                        <p className=" text-justify px-5 ">
                            <FontAwesomeIcon
                                className="text-warning ml-5"
                                icon={faQuoteLeft}
                            />{' '}
                            {t('homepage.whoweare.descripton')}
                            <FontAwesomeIcon
                                className="text-warning mr-5"
                                icon={faQuoteRight}
                            />
                        </p>
                        <Button
                        as={Link} to={ADOPT_ROUTE}
                            className=" home-input home-btn  p-3 border-0 shadow-none"
                            style={{ backgroundColor: '#f2726f' }}
                        >
                            {' '}
                            {t('homepage.adoptnow')}
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>



            <Container dir={dir} >
                <Row className="container-fluid   m-0 h4 mt-5 mb-3 text-danger">
                    <FontAwesomeIcon
                        icon={faBraille}
                        className="text-warning align-self-center"
                    />
                    <h7 className="align-self-center p-2">{t('homepage.somestories')}</h7>
                </Row>
                <Row className="d-flex justify-content-center text-center p-4">
                    <Col className="col-lg-4 col-md-10" sm={4}>
                        <Row>
                            <Col className="col-lg-3 col-md-3"sm={3}>
                                <img src={HP1} className="img-fluid" alt="" />
                            </Col>
                            <Col className="col-lg-9 col-md-9  text-justify" sm={9}>
                                <h5 className=" text-danger text-center">
                                {t('homepage.story1.title')}{' '}
                                </h5>
                                {t('homepage.story1.story')}{' '}
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-lg-4 col-md-10 " sm={4}>
                        <Row>
                            <Col className="col-lg-3 col-md-3" sm={3}>
                                <img src={HP2} className="img-fluid" alt="" />
                            </Col>
                            <Col className="col-lg-9 col-md-9  text-justify" sm={9}>
                                <h5 className=" text-danger text-center">
                                {t('homepage.story2.title')}{' '}{' '}
                                </h5>
                                {t('homepage.story2.story')}
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-lg-4 col-md-10" sm={4}>
                        <Row>
                            <Col className="col-lg-3 col-md-3" sm={3}>
                                <img src={HP3} className="img-fluid" alt="" />
                            </Col>
                            <Col className="col-lg-9 col-md-9  text-justify" sm={9}>
                            <h5 className=" text-danger text-center">
                                {t('homepage.story2.title')}{' '}{' '}
                                </h5>
                                {t('homepage.story2.story')}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            
            <Container className=" slid mt-5 " fluid>
                <Slider  pets={pets}/>
            </Container> 


            
        </div>
    )
}
