import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
const Dummyaxiosapi_carousel = () => {
    const [first, setfirst] = useState([])

useEffect(() => {

axios.get("https://dummyjson.com/products").then((display)=>{
    console.log(display.data.products);
setfirst(display.data.products)
})
}, [])
  return (
    <div>
<div className='container'>
        <div className='row' >
        <Carousel>

{first.map((demo)=>
 <Carousel.Item>

{demo.images.map((demo2)=>
    <>
    <img alt='imagess' src={demo2}/>
    </>
)}


  <Carousel.Caption>
    <h3>{demo.category}</h3>
    <p>{demo.brand}</p>
  </Carousel.Caption>
</Carousel.Item>
)}
     

    </Carousel>
    </div>
    </div>


    </div>
  )
}

export default Dummyaxiosapi_carousel