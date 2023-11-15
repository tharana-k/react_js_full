import React from 'react'
import './About.css'
import { FaArrowRight } from "react-icons/fa";
const About = () => {
    const array1 =[{image:"images/about-icon1.png",caption:"History"},
{image:"images/about-icon2.png",caption:"   Academic"},
{image:"images/about-icon3.png",caption:"Innovation"},
{image:"images/about-icon4.png",caption:"Faculty"}

]
const backgroundColors = ['#9747ff', '#417cd4', '#ec732f', '#ed4883'];
  return (
    
    <section className="about-section">
    <div className="container position-relative">
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_wrapper">
                   
                        <img className="img-fluid" src="images/about1.png" alt=""/>
                
                    <div className="box">
                        <div className="year">
                            <div className="number">
                                <span className="mb-0 value counter">25k</span>
                                <sup className="mb-0 plus">+</sup>
                            </div>                            
                            <span className="mb-0 text">Happy students</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_content contents">
                    <h6>MORE ABOUT OUR COMPANY</h6>
                    <h2>Welcome to Our Academic Community</h2>
                    <p className="text1 text-size-18">Lorem ipsum dolor sit amet consectetur adipiscing elit praesent ultricies elementu massa malesuada posuere sed sollicitudin ligula vel mollis pharetra massa ligula aliquet nisl id venenatis leo massa vel justo.
                    </p> 

                    <p className="text3 text-size-18">Emphasize FutureBotics' core values, which include innovation, sustainability, and a passion for pushing the 
                        boundaries of possibility. Additionally, mention that FutureBotics offers a range of services, including customization options to tailor robots according to specific needs.
                    </p>
                    <div className='home-button mt40 '>
<div className='row'>
    {array1.map((demo,index)=>
    <div className='col-md-6 icon-flex color1' >
    <div className='icon-wraps'  style={{ backgroundColor: backgroundColors[index] }}>
        <img className='img-fluid' src={demo.image} alt='icon'/>
                                
        </div>     <h6>{demo.caption} </h6>  </div>
    )}


    </div>
</div>                </div>
            </div>
        </div>
  
    </div>
</section>
  )
}

export default About