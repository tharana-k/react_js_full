import React from 'react'
import './Process.css'
import { FaArrowRight } from "react-icons/fa";
function Process() {
 const array=[{title:"Robotic Automation",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"https://html.designingmedia.com/futureai/assets/images/service-icon3.png"},
 {title:"Robotics Consulting",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"https://html.designingmedia.com/futureai/assets/images/service-icon4.png"},
 {title:"Logistics Automation",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"https://html.designingmedia.com/futureai/assets/images/service-icon3.png"},
 {title:"Agricultural Robotics",para:"Nam eget dui. Etiam rhoncus. Ma ecenas tempus, tellus eget condimentum.",image:"https://html.designingmedia.com/futureai/assets/images/service-icon4.png"}

]
  return (
    <>
      <section className="process-area padding-100-50" id="process">
        <div className="container">
            <div className="row flex-v-center">
                <div className="col-md-6 col-xs-12">
                    <div className="process-warapper-content">
                        <div className="row">
                        <div className="content">
                    <h6>About FutureBotics</h6>
                    <h2>Services We Offer.</h2>
                    </div>
{array.map((demo)=>

<>

<div className="col-md-6 col-xs-12">

                                <div className="single-process-box center ">
                                    <div className="process-icon">
                                        <img src={demo.image} alt=""/>
                                    </div>
                                    <h3 className="process-title">{demo.title}</h3>
                                    <p>{demo.para}</p>
                                    <a href="#/" className="round-button"><FaArrowRight/></a>
                                </div>
                            </div></>

)}

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="process-content wow fadeInUp sm-mb50 xs-mb50">
                        <div className="area-title wow fadeIn">
                    
                       
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 </p>
                 <div className="service_wrapper">
                        
                        <figure className="service-image1 mb-0">
                            <img src="https://html.designingmedia.com/futureai/assets/images/service-image1.png" alt="" className="img-fluid"/>
                        </figure> 
                        <figure className="service-image2 mb-0">
                            <img src="https://html.designingmedia.com/futureai/assets/images/service-image2.png" alt="" className="img-fluid"/>
                        </figure>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  


    </>
  )
}

export default Process