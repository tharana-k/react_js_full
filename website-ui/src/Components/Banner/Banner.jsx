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
<p className='top-subhidding'>Creative & Digital agency</p>
<h1>
<span>We Are Making</span>
Creative Product
</h1>
<p>Someone want to play with digital products & minimal<br></br> interior designs.</p>
<div className='home-button mt40 '>
<a href="#/">Learn More 
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>

</div>
</div>
<div className='col-md-3'>
    <div className='welcome-layer'>
    <div className='home-layer-1'>
<img alt='banner-img' src='https://quomodosoft.com/html/hooper/hooper/assets/img/home/home_three_layer_1.png' />
</div>
<div className='home-layer-2'>
<img alt='banner-img2' src='https://quomodosoft.com/html/hooper/hooper/assets/img/home/home_three_layer_2.png' />
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