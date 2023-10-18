import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Carousel1.css'

function Carousel1() {
  return (
    <div>
           
        <div className='row' >
   <Carousel>
      <Carousel.Item>
       <img alt='imagess' src='https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img alt='imagess' src='https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img alt='imagess' src='https://miro.medium.com/v2/resize:fit:1400/1*YZjfn52wLI-l_ReW9928EA.jpeg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>

  )
}

export default Carousel1