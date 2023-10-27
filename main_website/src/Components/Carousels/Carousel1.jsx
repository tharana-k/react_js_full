import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel1.css'


const array =[{image:"https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg",caption:"First slide label",desc:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
{image:"https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg",caption:"Second slide label",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
{image:"https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg",caption:"Third slide label",desc:" Praesent commodo cursus magna, vel scelerisque nisl consectetur."}

]


function Carousel1() {
  return (
    <div>
           
        <div className='row' >
   <Carousel>
{array.map((demo)=>

<Carousel.Item>
<img alt='imagess' src={demo.image}/>
 <Carousel.Caption>
   <h3>{demo.caption}</h3>
   <p>{demo.desc}</p>
 </Carousel.Caption>
</Carousel.Item>


)}

     

    </Carousel>
    </div>
    </div>

  )
}

export default Carousel1