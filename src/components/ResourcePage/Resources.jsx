import { Row, Container, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Resource.css'
import React from 'react'
import im from '../../images/ResourcePage/Rectangle 1.svg'
import im2 from '../../images/ResourcePage/Rectangle 2.svg'
import im3 from '../../images/ResourcePage/Rectangle 3.svg'

export default function Resources() {
    return (
        <Container fluid>
            <p className="text-center pt-5 pb-3 text-sm-start">
                Tips for the First 30 Days of Dog Adoption
            </p>
            <Row className="pb-5">
                <img src={im} alt="" className="img-fluid pt-5 " />
            </Row>
            <Row className="pt-5 Row1">
                <Col lg={1}>{}</Col>
                <Col lg={8}>
                    {' '}
                    <h3>Before bring your cat to home</h3>
                    <ol className="p-5">
                        <li>
                            Cats are territorial and coming into a new home
                            leaves them feeling uneasy. There’s all that
                            unexplored space, and who knows what may lurk there.
                            Do her a favor and provide a small area to call her
                            own for the first few days or weeks. A bathroom or
                            laundry room works well. Furnish the room with cat
                            amenities, such as food, water and a litter box.
                            You’ll want to spend time with your cat, so make
                            sure there’s a comfortable place for you to sit as
                            well.{' '}
                        </li>
                        <li className="pt-4">
                            Fill a litter box with one or two inches of litter
                            and place it in her room where she can use it
                            undisturbed. After all, everyone deserves a modicum
                            of privacy when pottying!
                        </li>
                        <li className="pt-4">
                            Set up a feeding station with food and water bowls.
                            Locate it away from the litter box.{' '}
                        </li>
                        <li className="pt-4">
                            Cats love to get away from it all in small places.
                            If she came home in a cat carrier, you can use that.
                            You can also make one by cutting a doorway in the
                            end of a cardboard box, or simply buy a covered cat
                            bed at a pet supply store. Whatever you choose, make
                            sure the space is big enough for the cat to stand up
                            and turn around in. Make sure she can see the door
                            to the room, so she won’t be startled.{' '}
                        </li>
                        <li className="pt-4">
                            Cats love to get away from it all in small places.
                            If she came home in a cat carrier, you can use that.
                            You can also make one by cutting a doorway in the
                            end of a cardboard box, or simply buy a covered cat{' '}
                        </li>
                    </ol>
                </Col>
                <Col lg={1}>{}</Col>
            </Row>
            <Row className="Row2">
                <img src={im2} alt="" className="img-fluid img2 pt-5 pb-5" />
            </Row>
            <Row className=" pt-5  Row1">
                <Col lg={1}>{}</Col>
                <Col lg={8}>
                    <h3 className="pl-5">First Day</h3>
                    <ol className=" ol">
                        <li className="pt-4 ">
                            Now you’re ready for your cat’s homecoming. Bring
                            her home in a cat carrier, if possible. She’s seen a
                            lot of excitement, so take her directly to her new
                            room (make sure the toilet lid is down, if she’s
                            acclimating in your bathroom). Ideally, you would
                            restrict her exposure to the whole family, but
                            naturally, everyone is going to want to see her.
                            Remind them of the ground rules you’ve set up.
                        </li>
                        <li className="pt-4 ">
                            Sit on the floor and let her come to you. Don’t
                            force her. Just let her get acquainted on her own
                            terms. If she doesn’t approach, leave her alone and
                            try again later. Some cats are particularly
                            frightened, and she may retreat to her hidey hole
                            and not come out when you’re around at all. She may
                            only come out at night when the house is quiet. Give
                            her time.
                        </li>
                    </ol>
                </Col>
                <Col lg={1}>{}</Col>
            </Row>
            <Row className="Row1">
                <img src={im3} alt="" className="img-fluid img2 pt-5 pb-5" />
            </Row>
            <Row className="Row1">
                <Col lg={1}>{}</Col>
                <Col lg={8}>
                    <h3 className="pl-5">following weeks</h3>
                    <ol className=" ol">
                        <li className="pt-3">
                            Now you’re ready for your cat’s homecoming. Bring
                            her home in a cat carrier, if possible. She’s seen a
                            lot of excitement, so take her directly to her new
                            room (make sure the toilet lid is down, if she’s
                            acclimating in your bathroom). Ideally, you would
                            restrict her exposure to the whole family, but
                            naturally, everyone is going to want to see her.
                            Remind them of the ground rules you’ve set up.
                        </li>
                        <li className="pt-5">
                            Sit on the floor and let her come to you. Don’t
                            force her. Just let her get acquainted on her own
                            terms. If she doesn’t approach, leave her alone and
                            try again later. Some cats are particularly
                            frightened, and she may retreat to her hidey hole
                            and not come out when you’re around at all. She may
                            only come out at night when the house is quiet. Give
                            her time.
                        </li>
                    </ol>
                </Col>
                <Col lg={1}>{}</Col>
            </Row>
        </Container>
    )
}
