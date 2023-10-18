import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Cards3.css'
function Cards3() {
  return (
    <div className='cards-wrap'>
        <div className='container'>
        <div className='row' >
        <div className='col-md-12'>
            <h4 className='heading'>Our Services</h4>
            </div>
            <div className='col-md-3 ' >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwZYd9qqFM3X98jKF0LOb4c9YdUpgspn80w&usqp=CAU" />
      <Card.Body>
        <Card.Title>Service 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LXulMv0-eBOS2E96n1f3t7q6f-rrnAyQ8A&usqp=CAU" />      <Card.Body>
        <Card.Title>Service 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd9AKwiBVsd5f_YFCWJyLjaVgxTc-f2Wcn14VJ_mfdnQM3JysUF2Sq4vgcViV6erM3UU&usqp=CAU" />      <Card.Body>
        <Card.Title>Service 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-3'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/education-concept-3d-hat-books-blue-background-modern-flat-design-isometric-concept-education-back-school_387680-17.jpg" />      <Card.Body>
        <Card.Title>Service 4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Cards3