import React, { useEffect, useState } from 'react'
import './Banner.css'
import { FaArrowRight } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

function Banner() {
  const upDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const UpDownContainer = styled.div`
margin-top: 56px;
  animation: ${upDownAnimation} 2s linear infinite;
`;

const [isAnimating, setIsAnimating] = useState(true);

  const handleAnimationEnd = () => {
    // Toggle the up-down animation on animation end
    setIsAnimating((prevIsAnimating) => !prevIsAnimating);
  };
//animation 2


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BannerContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const [isAnimating1, setIsAnimating1] = useState(true);

  useEffect(() => {
    // After component mounts, set isAnimating to false to stop the animation
    const timeout = setTimeout(() => {
      setIsAnimating1(false);
    }, 3000); // Adjust the duration of the animation

    return () => clearTimeout(timeout);
  }, []); // Run the effect only once on component mount
  return (
    <>
    <section className='banner welcome-text-area'>
    <div className='container-fluid'>
<div className='row align'>
<div className='col-md-6 relative'>
<UpDownContainer isAnimating={isAnimating} onAnimationEnd={handleAnimationEnd}>

<img src="images/arrow.png" className="img-fluid arrow-img " alt="robot"/>
</UpDownContainer>
    <div className='welcome-text'>
<p className='top-subhidding'>UNLEASH YOUR POTENTIAL</p>
<BannerContainer isAnimating={isAnimating1}>
<h1>Empowering Minds, Shaping Futures.
</h1>
</BannerContainer>
<p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer
 et nisl bibendum elementum nulla sed pharetra enim.</p>
<div className='home-button mt40 '>
<Link to="/about">More About Us
<div className='icon-wrap'><FaArrowRight/></div>
</Link>
</div>

</div>
</div>
<div className='col-md-4'>
    <div className="home-img d-lg-flex ">

   <img src="images/banner1.jpg" className="img-fluid robot-img" alt="robot"/>
                </div>
</div>


<div className='col-md-2 home-img'>
<UpDownContainer isAnimating={isAnimating} onAnimationEnd={handleAnimationEnd}>

<img src="images/banner2.jpg" className="img-fluid robot-img1" alt="robot"/>
</UpDownContainer>
<img src="images/banner3.jpg" className="img-fluid robot-img1" alt="robot"/>

</div>
</div>
    </div>

    </section>
    
    </>
  )
}

export default Banner