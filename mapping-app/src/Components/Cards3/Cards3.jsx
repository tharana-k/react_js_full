import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Cards3.css'
function Cards3() {

const cardd=[
  
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwZYd9qqFM3X98jKF0LOb4c9YdUpgspn80w&usqp=CAU",title:"Service 11",
  texts:"Some quick example text to build on the card title and make up bulk of the card content."},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LXulMv0-eBOS2E96n1f3t7q6f-rrnAyQ8A&usqp=CAU",title:"Service 2",
  texts:"Some quick example text to build on the card title and make up bulk of the card content."},
  {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd9AKwiBVsd5f_YFCWJyLjaVgxTc-f2Wcn14VJ_mfdnQM3JysUF2Sq4vgcViV6erM3UU&usqp=CAU",title:"Service 3",
  texts:"Some quick example text to build on the card title and make up bulk of the card content."},
  {image:"https://img.freepik.com/premium-photo/education-concept-3d-hat-books-blue-background-modern-flat-design-isometric-concept-education-back-school_387680-17.jpg",title:"Service 4",
  texts:"Some quick example text to build on the card title and make up bulk of the card content."}

]

  return (
    <div className='cards-wrap'>
        <div className='container'>
        <div className='row' >
        <div className='col-md-12'>
            <h4 className='heading'>Our Services</h4>
            </div>
{cardd.map((demo2)=>

<div className='col-md-3 ' >
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={demo2.image} />
  <Card.Body>
    <Card.Title>{demo2.title}</Card.Title>
    <Card.Text>
    {demo2.texts}
    </Card.Text>
    <Button  variant="primary">Read More</Button>
  </Card.Body>
</Card>
</div>


)}


    

    </div>
    </div>
    </div>
  )
}

export default Cards3