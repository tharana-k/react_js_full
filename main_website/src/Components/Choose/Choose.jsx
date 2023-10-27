import React from 'react'
import'./Choose.css'
import { FaArrowRight } from "react-icons/fa";
const Choose = () => {
  return (
<section className="choose-section">
    <div className="container">
        <figure className="choose-backgroundimage1 mb-0">
            <img src="https://html.designingmedia.com/futureai/assets/images/choose-backgroundimage1.png" className="img-fluid" alt=""/>
        </figure>  
        <figure className="choose-backgroundimage2 mb-0">
            <img src="https://html.designingmedia.com/futureai/assets/images/choose-backgroundimage2.png" className="img-fluid" alt=""/>
        </figure>  
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 d-md-block d-none"></div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="content aos-init aos-animate" data-aos="fade-up">
                    <h6>Why Choose Us</h6>
                    <h2>Explain The Advanced Technologies Powering FutureBotics' Ai Robots.</h2>
                    <p className="text-size-18">Explain the advanced technologies powering FutureBotics' AI robots. Discuss the use of artificial intelligence, machine learning, and advanced sensors, </p>
                    <div className='home-button mt40 '>
<a href="#/">Learn More 
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>                            </div>
            </div>
        </div>
        <div className="choose_wrapper position-relative">                   
            <figure className="choose-image mb-0">
                <img src="https://html.designingmedia.com/futureai/assets/images/choose-image.png" className="img-fluid" alt=""/>
            </figure>
        </div>   
    </div>
</section>
  )
}

export default Choose