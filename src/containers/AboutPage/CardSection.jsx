import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Ellipsemember from '../../images/About-us/Ellipse 15.svg'
import MemberBg from '../../images/About-us/bgmembers.svg'
import Facebook from '../../images/About-us/facebook 1.svg'
import Youtube from '../../images/About-us/youtube 1.svg'
import Twitter from '../../images/About-us/twitter 1.svg'
import Instagram from '../../images/About-us/instagram.svg'

import './CardSection.css'

const CardSection = () => {
    const cardInfo = [
        {
            MemberBg: { MemberBg },
            Ellipsemember: '',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            MemberBg: { MemberBg },
            Ellipsemember: '',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            MemberBg: { MemberBg },
            Ellipsemember: '',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            MemberBg: { MemberBg },
            Ellipsemember: '',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            MemberBg: { MemberBg },
            Ellipsemember: '',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            MemberBg: { MemberBg },
            Ellipsemember:
                'https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg',
            Youtube: 'https://www.youtube.com/',
            Facebook: 'https://www.facebook.com/',
            Twitter: 'https://www.twitter.com/',
            Instagram: 'https://www.instagram.com/',
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
    ]
    const renderCard = (card, index) => (
        <Card style={{ width: '25rem' }} key={index} className="m-3 box">
            <Card.Header
                // style={{ height: '125px', backgroundImage: { MemberBg } }}
                // style={{
                //     height: '125px',
                //     backgroundColor: '#f7b42c',
                //     backgroundImage:
                //         'linear-gradient(315deg, #f7b42c 0%, #fc575e 74%)',
                // }}
                className="aqua-gradient text-center "
            >
                <Card.Img
                    style={{}}
                    variant="top"
                    src={
                        card.Ellipsemember ? card.Ellipsemember : Ellipsemember
                    }
                    alt="Ellipsemember"
                    className="w-50 px-3 h-100 rounded-circle mt-5"
                />
            </Card.Header>
            <Card.Body className="text-center mt-3">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.text}
                    <ul className="list-unstyled list-inline font-small mt-3">
                        <li className="list-inline-item pr-2">
                            <a
                                href={card.Facebook}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={Facebook} alt="facebook" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item pr-2">
                            <a
                                href={card.Twitter}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={Twitter} alt="twitter" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href={card.Instagram}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={Instagram} alt="Instagram" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href={card.Youtube}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={Youtube} alt="Youtube" />{' '}
                            </a>
                        </li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <Container fluid style={{ width: '90%' }}>
            <Row>{cardInfo.map(renderCard)}</Row>
        </Container>
    )
}

export default CardSection
