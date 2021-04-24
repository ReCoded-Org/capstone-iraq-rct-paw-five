import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Ellipsemember from '../../images/About-us/Ellipse 15.svg'
import Mohammed from '../../images/About-us/Team/mohammed.JPG'
import Muhanned from '../../images/About-us/Team/muhanned.jpg'
import Areeg from '../../images/About-us/Team/areeg.jpg'
import Ali from '../../images/About-us/Team/ali.jpg'
import Faeza from '../../images/About-us/Team/faeza.jpg'
import Zena from '../../images/About-us/Team/zena.jpg'
import MemberBg from '../../images/About-us/bgmembers.svg'
import Linkedin from '../../images/About-us/linkedin.svg'
import Github from '../../images/About-us/github.svg'

const CardSection = () => {
  const cardInfo1 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Muhanned,
      Linkedin: 'https://www.linkedin.com/in/muhannednoman/',
      Github: 'https://github.com/MuhannedNoman',
      title: 'Muhanned Noman',
      text:
        'Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both typescript and react technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. ',
    },
  ]
  const cardInfo2 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Mohammed,
      Linkedin: 'http://linkedin.com/in/mohammedalihasan',
      Github: 'https://github.com/klay964',
      title: 'Mohammed Ali',
      text:
        'A front-end web developer with 1 year of experience in front-end web development. A passionate,communicative developer who specializes in React.js library and front-end web development technologies ,University student interested in software development.',
    },
  ]
  const cardInfo3 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Areeg,
      Linkedin: 'https://www.linkedin.com/in/areeg-fahad/',
      Github: 'https://github.com/AREEG94FAHAD',
      title: 'Areeg Fahad',
      text:
        'Network Engineer and Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.',
    },
  ]
  const cardInfo4 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Faeza,
      Linkedin: '',
      Github: 'https://github.com/Faeza97',
      title: 'Faeza Salman',
      text:
        'A Frontend web developer graduated at ReCoded. Her passion is to work and get a job as a full stack developer to make her world a better place.',
    },
  ]

  const cardInfo5 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Ali,
      Linkedin: 'https://www.linkedin.com/in/ali-mustafa-195a321a0',
      Github: 'https://github.com/Ali-mustafa8?tab=repositories',
      title: 'Ali Mustafa',
      text:
        'undergraduate college student who is Passionate and motivated in software development and always look for Opportunities to take my skills to the next level.',
    },
  ]
  const cardInfo6 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Zena,
      Linkedin: 'https://www.linkedin.com/in/zena-alhello-b768111ab',
      Github: 'https://github.com/ZeenaKareemAlhello',
      title: 'Zena Abdulakreem',
      text:
        'Im a fullstack web developer by reactjs, nextjs,nodejs,express Also Im a data analyst, Im working now on my startup called ادائي to track the performance for the children by their parents',
    },
  ]
  const renderCard = (card, index) => (
    <Card key={index} className="card m-3 mt-5 mb-5 pb-5 h-75 ">
      <Card.Header className="aqua-gradient text-center ">
        <Card.Img
          style={{ objectFit: 'cover' }}
          variant="top"
          src={card.Ellipsemember ? card.Ellipsemember : Ellipsemember}
          alt="Ellipsemember"
          className="imgCard rounded-circle  px-4 h-100 mt-5"
        />
      </Card.Header>
      <Card.Body className="text-center mt-3">
        <Card.Title className="mt-4">{card.title}</Card.Title>
        <Card.Text>
          {card.text}
          <ul className="list-unstyled list-inline font-small mt-3">
            <li className="list-inline-item pr-2">
              <a href={card.Linkedin} target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="linkedin" />{' '}
              </a>
            </li>
            <li className="list-inline-item pr-2">
              <a href={card.Github} target="_blank" rel="noreferrer">
                <img src={Github} alt="github" />{' '}
              </a>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )

  return (
    <Container fluid style={{ width: '100%' }}>
      <Row>
        <Col lg={4} md={6}>
          {cardInfo1.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {cardInfo2.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {cardInfo3.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {cardInfo4.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {cardInfo5.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {cardInfo6.map(renderCard)}
        </Col>
      </Row>
    </Container>
  )
}

export default CardSection
