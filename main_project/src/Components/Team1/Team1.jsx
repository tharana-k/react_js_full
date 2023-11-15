import React, { useContext, useEffect } from 'react'
import './Team1.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Newcontext } from '../../App';
import { Link } from 'react-router-dom';

const Team1 = () => {
    
    const[data,setData] = useContext(Newcontext)

    const settings = {
      
    
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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

  return (
<section className='team'>
<div className='container-fluid'>
<div className='row align-center'>
<div className='col-md-4'>
<div className="contents">
                    <h6>OUR PROFESSIONALS</h6>
                    <h2>Our Expert Lecturer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent ultricies element massa malesuada posuere sed.</p>
    
                    </div>
</div>
<div className='col-md-8'>

<Slider {...settings}>
    {data.map(( demo,ind)=>
      <div className="slick-slide">
 
 <img className="img-fluid" src={demo.image} alt="Uploaded" />


        <div className='details'>
        <h5 className='name'>{demo.name} </h5>
        <h6 className='desig'>{demo.desig} </h6>
        </div>
      </div>
    

    )}
    </Slider>
</div>
</div>
</div>

</section>
  )
}

export default Team1