import React from 'react'
import './Banner.css'
import { FaArrowRight } from "react-icons/fa";
function Banner() {
  return (
    <>
    <section className='banner welcome-text-area'>
    <div className='container-fluid'>
<div className='row align'>
<div className='col-md-6 relative'>
<img src="images/arrow.png" className="img-fluid arrow-img " alt="robot"/>
    <div className='welcome-text'>
<p className='top-subhidding'>UNLEASH YOUR POTENTIAL</p>
<h1>Empowering Minds, Shaping Futures.
</h1>
<p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit integer
 et nisl bibendum elementum nulla sed pharetra enim.</p>
<div className='home-button mt40 '>
<a href="#/">Getting Started
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>

</div>
</div>
<div className='col-md-4'>
    <div className="home-img d-lg-flex ">

   <img src="images/banner1.jpg" className="img-fluid robot-img" alt="robot"/>
                </div>
</div>


<div className='col-md-2 home-img'>
<img src="images/banner2.jpg" className="img-fluid robot-img1" alt="robot"/>
<img src="images/banner3.jpg" className="img-fluid robot-img1" alt="robot"/>
</div>
</div>
    </div>

    </section>
    
    </>
  )
}

export default Banner