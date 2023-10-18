import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'

const Dummyaxiosapi_card = () => {
    const [first, setfirst] = useState([])

useEffect(() => {

axios.get("https://dummyjson.com/products").then((display)=>{
    console.log(display);
setfirst(display.data.products)
})
}, [])
  return (
    <div>
<div className='container'>
        <div className='row' >
        {first.map((demo2)=>
<>
            <div className='col-md-3 ' >
    <Card style={{ width: '18rem' }}>

    <Carousel>
    {demo2.images.map((demo2)=>
 <Carousel.Item>

    <img alt='imagess' src={demo2}/>
 

</Carousel.Item>
)}
    </Carousel>
      <Card.Body>
        <Card.Title>{demo2.brand}</Card.Title>
        <Card.Title>{demo2.price}</Card.Title>
        <Card.Title>{demo2. discountPercentage}</Card.Title>   
        <Card.Text>
        {demo2.description}
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    </>

)}
    </div>
    </div>


    </div>
  )
}

export default Dummyaxiosapi_card