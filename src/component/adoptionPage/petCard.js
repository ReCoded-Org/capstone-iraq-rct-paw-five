import React from 'react';
import {Card,Row,Col} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';


function PetCard({pet}){

    return (

    <Card style={{ width: '95%',height:'18rem'}} className="position-relative hidden_border card_rounded mb-2">
      <div className="rounded">
    <Card.Img variant="top" src={`${pet.file}`} style={{height:'14rem'}} />
    </div>
    <div className="position-absolute top-8 px-2 py-1 m-2 rounded" style={{ background:'white',opacity: 0.6,right:8 }}>
    <i className="fa fa-map-marker mx-1" aria-hidden="true"/>
      <p className="d-inline-block m-0">{pet.address}</p>
    </div>
    <Card.Body >
      <Card.Title className="text-center text_yellow">{pet.petName}</Card.Title>
      <Card.Text className="text-truncate text-wrap" style={{width:'100%' ,height:'1.5rem'}}>
        {pet.des}
      </Card.Text>
     
     <Row className="px-2 pb-4 d-flex justify-content-around mb-3"> 
     <Col className="align-self-end">
     {pet.gender==='male'?<i className="fa fa-mars "><p className="text-danger d-inline-block p-1 m-0">{pet.gender}</p></i>:<i className="fa fa-venus" aria-hidden="true"><p className="text-danger d-inline-block p-1 m-0">{pet.gender}</p></i>}
     </Col>
     <Col>
     <button type="button" href="/DetailsPage" className="rounded py-1 px-4 bg-warning">Details</button>
     </Col>
    
  </Row>
      
     
    </Card.Body>
  </Card>)


}


export default PetCard














