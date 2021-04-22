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
import Facebook from '../../images/About-us/facebook 1.svg'
import Youtube from '../../images/About-us/youtube 1.svg'
import Twitter from '../../images/About-us/twitter 1.svg'
import Instagram from '../../images/About-us/instagram.svg'

const CardSection = () => {
  const cardInfo1 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Muhanned,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Muhanned Noman',
      text:
        'Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both typescript and react technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. ',
    },
  ]
  const cardInfo2 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Mohammed,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Mohammed Ali',
      text:
        'A front-end web developer with 1 year of experience in front-end web development. A passionate,communicative developer who specializes in React.js library and front-end web development technologies ,University student interested in software development.',
    },
  ]
  const cardInfo3 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Areeg,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Areeg Fahad',
      text:
        'Network Engineer and Full Stack Developer with 2+ years of hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages.',
    },
  ]
  const cardInfo4 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Faeza,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Faeza Salman',
      text:
        'A Frontend web developer graduated at ReCoded. Her passion is to work and get a job as a full stack developer to make her world a better place.',
    },
  ]

  const cardInfo5 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Ali,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Ali Mustafa',
      text:
        'Organized, collaborative, and highly skilled iOS developer with 6+ years of professional experience in dynamic and deadline-driven work environments. Eager to join BrambleSoft to delight its customers with magical experiences.',
    },
  ]
  const cardInfo6 = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: Zena,
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Zena Abdulakreem',
      text:
        ' web developer with over 2 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. W3C certified. Implemented new responsive website approach which increased mobile traffic by 20%.',
    },
  ]
  const renderCard = (card, index) => (
    <Card key={index} className="card m-3 mt-5 mb-5 pb-5 h-75 ">
      <Card.Header className="aqua-gradient text-center ">
        <Card.Img
          style={{}}
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
              <a href={card.Facebook} target="_blank" rel="noreferrer">
                <img src={Facebook} alt="facebook" />{' '}
              </a>
            </li>
            <li className="list-inline-item pr-2">
              <a href={card.Twitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="twitter" />{' '}
              </a>
            </li>
            <li className="list-inline-item">
              <a href={card.Instagram} target="_blank" rel="noreferrer">
                <img src={Instagram} alt="Instagram" />{' '}
              </a>
            </li>
            <li className="list-inline-item">
              <a href={card.Youtube} target="_blank" rel="noreferrer">
                <img src={Youtube} alt="Youtube" />{' '}
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
