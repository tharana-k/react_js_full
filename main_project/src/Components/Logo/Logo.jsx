import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Logo.css'
const Logo = () => {
    const settings = {
      
    
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        };
    const array1 =[{image:"images/logo1.png"},
{image:"images/logo2.png"},
{image:"images/logo3.png"},
{image:"images/logo4.png"},
{image:"images/logo1.png"},
{image:"images/logo2.png"},
{image:"images/logo3.png"},
{image:"images/logo4.png"}
]

  return (
    
<section>
<div className="container-fluid">
    <Slider {...settings}>
    {array1.map(( demo)=>
      <div className="slick-slide">
        <img className="img-fluid" src={demo.image} alt=""/>
      </div>
    

    )}
    </Slider>
    </div>
    </section>
  )
}

export default Logo