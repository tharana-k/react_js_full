import React from 'react'
import './About.css'
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <section className="about-section">
    <div className="container position-relative">
        <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="about_wrapper">
                    <figure className="mb-0 about-image">
                        <img className="img-fluid" src="https://html.designingmedia.com/futureai/assets/images/about-image.jpg" alt=""/>
                    </figure>
                    <div className="box">
                        <div className="year">
                            <div className="number">
                                <span className="mb-0 value counter">18</span>
                                <sup className="mb-0 plus">+</sup>
                            </div>                            
                            <span className="mb-0 text">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <div className="about_content content">
                    <h6>About FutureBotics</h6>
                    <h2>Business with AI Solutions.</h2>
                    <p className="text1 text-size-18">The about us section provides a brief company overview. It should highlight FutureBotics' position as a 
                        leader in AI and robotics, shaping the future of intelligent automation.
                    </p> 

                    <p className="text3 text-size-18">Emphasize FutureBotics' core values, which include innovation, sustainability, and a passion for pushing the 
                        boundaries of possibility. Additionally, mention that FutureBotics offers a range of services, including customization options to tailor robots according to specific needs.
                    </p>
                    <div className='home-button mt40 '>
<a href="#/">Learn More 
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>                </div>
            </div>
        </div>
  
    </div>
</section>
  )
}

export default About