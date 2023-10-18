import React from 'react'
import './Team.css'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {

    const array=[{desig:"founder",facebook:"#/",twitter:"#/",linkedin:"#/",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/team/member-1.jpg",name:"Rosalind D. William"},
    {desig:"CEO & CONSULTANT",facebook:"#/",twitter:"#/",linkedin:"#/",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/team/member-2.jpg",name:"Haliam W. Womba"},
    {desig:"DESIGNER",facebook:"#/",twitter:"#f/",linkedin:"#/",image:"https://quomodosoft.com/html/hooper/hooper/assets/img/team/member-3.jpg",name:"Troma Z. Dicuza"}]
  return (
    <div>
<section class="team-area " id="team">
        <div class="container">
            <div class="row flex-v-center">
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                    <div class="area-title " >
                        <h4 class="subtitle uppercase">
                            Team
                        </h4>
                        <h2>Team You Want To Work With.</h2>
                        <img src="https://quomodosoft.com/html/hooper/hooper/assets/img/bg-layers/area-line.png" alt=""/>

                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className='home-button mt40 '>
<a href="#/">Learn More 
<div className='icon-wrap'><FaArrowRight/></div>
</a>
</div>
                </div>
            </div>
            <div class="row">

{array.map((demo)=>

<div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
<div class="single-team-eleven ">
    <div class="member-image">
        <img src={demo.image} alt=""/>
    </div>
    <div class="member-details">
        <div class="member-social-bookmark">
            <ul>
                <li><a href={demo.facebook}><FaFacebookF/></a></li>
                <li><a href={demo.twitter}><BiLogoTwitter/></a></li>
                <li><a href={demo.Linkedin}><FaLinkedinIn/></a></li>
            </ul>
        </div>
        <div class="name-and-designation">
            <p class="designation">{demo.desig}</p>
            <h3>{demo.name}</h3>
        </div>
    </div>
</div>
</div>


)}

            


          
            </div>
        </div>
    </section>


    </div>
  )
}

export default Team