import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

const Ternaryoperator_cards = () => {
    const [showtext, setshowtext] = useState(false)
    const places = [{
        name:"kannur",
        distance:"60km",
        image:"https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg"

    },
    {
        name:"kollam",
        distance:"80km",
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"

    },
    {
        name:"kottayam",
        distance:"90km",
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"

    },
]
  return (
    <div>
        <h1>Ternary operator example2.....</h1>
{showtext?<div className='container'>
        <div className='row' >
        {places.map((demo2)=>
<>
            <div className='col-md-3 ' >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={demo2.image} />
      <Card.Body>
        <Card.Title>{demo2.name}</Card.Title>
        <Card.Text>
        {demo2.distance}
        </Card.Text>
        <Button  variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </div>
    </>

)}
    </div>
    </div>:""}
<Button onClick={()=>setshowtext(!showtext)}>{showtext?"hide":"show"}</Button>
        
        </div>
  )
}

export default Ternaryoperator_cards