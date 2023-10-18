import React from 'react'
import { Carousel } from 'react-bootstrap'

function Mapcarousel() {
    const places = [{
        name:"First slide label",
        distance:"60km",
        image:"https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg"

    },
    {
        name:"second slide label",
        distance:"80km",
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"

    },
    {
        name:"third slide label",
        distance:"90km",
        image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"

    },
]
  return (
    <div>

<div className='row' >
   <Carousel>

{places.map((demo)=>
 <Carousel.Item>
 <img alt='imagess' src={demo.image}/>
  <Carousel.Caption>
    <h3>{demo.name}</h3>
    <p>{demo.distance}</p>
  </Carousel.Caption>
</Carousel.Item>
)}
     

    </Carousel>
    </div>



    </div>
  )
}

export default Mapcarousel