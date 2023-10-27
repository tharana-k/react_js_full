import React from 'react'
import './Footer.css'
import { GiVibratingSmartphone } from 'react-icons/gi';
import { GoMail } from 'react-icons/go';
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div>
 <footer>
<div className='container'>
  <div className='row'>
  <div className='col-md-4'>
  <a href="#home" class="navbar-brand">
    <img alt="logo" src="https://themes.pixelstrap.net/mega_bot/assets/images/logo.svg"/></a>
    <p>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
    </div>
    <div className='col-md-3'>
    <h3 class="footer-title">Company</h3>
            <div className="menuswrap">
              <ul>
                <li> <a href="/#">Home</a></li>
           
                <li> <a href="/#">About Us</a></li>
                <li> <a href="/#">A page</a></li>
                <li> <a href="/#">Another page</a></li>
                <li> <a href="/#" style={{borderRight:"none"}}>Contact Us</a></li>
                </ul>
            </div>
            </div>


            <div className='col-md-2'>
    <h3 class="footer-title">Services</h3>
            <div className="menuswrap">
              <ul>
                <li> <a href="/#">Social Media</a></li>
           
                <li> <a href="/#">SEO</a></li>
                <li> <a href="/#">Research</a></li>
                <li> <a href="/#">Content & PR</a></li>
                <li> <a href="/#" style={{borderRight:"none"}}>Contact Us</a></li>
                </ul>
            </div>
            </div>
            <div className='col-md-3'>
    <h3 class="footer-title ">Contact Us</h3>
            <div className="menuswrap menuswrap">
              <ul>
                <li><GiVibratingSmartphone/> <a href="tel:405) 555-0128">(405) 555-0128
                </a></li>
                <li><GoMail/> <a href="mailto:hello@example.com">hello@example.com</a></li>
                </ul>
            </div>
            </div>
<p className='cpyright'>Copyright @xyz.All Rights Reserved.</p>
</div>
</div>
        </footer>



    </div>
  )
}

export default Footer