import React from 'react'
import './Banner.css'
import { FaArrowRight } from "react-icons/fa";
function Banner() {
  return (
    <>
    <section className='banner welcome-text-area'>
    <div className='container'>
<div className='row'>
<div className='col-md-7'>
    <div className='welcome-text'>
<p className='top-subhidding'>Welcome to FutureBotics</p>
<h1>Pioneering<br></br> The <span>Future </span>
of<br></br> Robotics.
</h1>
<p className='para'>Building Intelligent Robots for a Smarter Tomorrow</p>
<div className='home-button mt40 '>
<a href="#/">Explore Our Cutting-edge AI Robots
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>

</div>
</div>
<div className='col-md-3'>
    <div className='welcome-layer'>
    <div className="home-img d-lg-flex d-none">
                    <img src="https://themes.pixelstrap.net/mega_bot/assets/images/landing/robot.png" className="img-fluid robot-img" alt="robot"/>
                    <div className="round-effect">
                        <img src="https://themes.pixelstrap.net/mega_bot/assets/images/landing/round.gif" className="img-fluid " alt="robot"/>
                    </div>
             
                </div>
</div>
</div>
</div>
    </div>

    </section>
    
    </>
  )
}

export default Banner