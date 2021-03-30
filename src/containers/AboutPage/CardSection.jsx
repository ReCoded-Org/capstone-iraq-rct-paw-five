import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Ellipsemember from '../../images/About-us/Ellipse 15.svg'
import MemberBg from '../../images/About-us/photo-1576502200272-341a4b8d5ebb 1.svg'
import Facebook from '../../images/About-us/facebook 1.svg'
import Youtube from '../../images/About-us/youtube 1.svg'
import Twitter from '../../images/About-us/twitter 1.svg'
import Instagram from '../../images/About-us/instagram.svg'

import './CardSection.css'

const CardSection = () => {
    const cardInfo = [
        {
            memberBg: { MemberBg },
            memberImg: { Ellipsemember },
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            memberBg: { MemberBg },
            memberImg: { Ellipsemember },
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            memberBg: { MemberBg },
            memberImg: { Ellipsemember },
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            memberBg: { MemberBg },

            memberImg: { Ellipsemember },
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            memberBg: { MemberBg },

            memberImg: { Ellipsemember },
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
        {
            memberBg: { MemberBg },

            memberImg:
                'https://cdn.vox-cdn.com/thumbor/M1qLla2h-V_2yV_Z4nF_NHH_tjA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/18286450/usa_today_12495932.jpg',
            utubeIcon: { Youtube },
            facebookIcon: { Facebook },
            twitterIcon: { Twitter },
            instagramIcon: { Instagram },
            title: 'Sara Lara',
            text:
                'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
        },
    ]
    const renderCard = (card, index) => (
        <Card style={{ width: '10rem' }} key={index} className="m-3 h-auto box">
            <Card.Header
                // style={{ backgroundImage: { MemberBg } }}
                style={{ height: '150px', backgroundColor: '#E79559' }}
                className="aqua-gradient text-center"
            >
                <Card.Img
                    style={{}}
                    variant="top"
                    src={card.memberImg}
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
                            <a href="#!" className="white-text">
                                <img src={card.facebookIcon} alt="facebook" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item pr-2">
                            <a href="#!" className="white-text">
                                <img src={card.twitterIcon} alt="twitter" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="white-text">
                                <img src={card.instagramIcon} alt="Instagram" />{' '}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#!" className="white-text">
                                <img src={card.utubeIcon} alt="Youtube" />{' '}
                            </a>
                        </li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
        <Container
            style={{ width: '90%' }}
            fluid
            className="d-flex flex-row flex-wrap avatar-container"
        >
            {cardInfo.map(renderCard)}
        </Container>
    )
}

export default CardSection
