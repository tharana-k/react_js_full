import React from 'react'
import './Footer.css'
import { GiVibratingSmartphone } from 'react-icons/gi';
import { GoMail } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebookF } from "react-icons/fa6";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div>
 <footer>
<div className='container-fluid'>
  <div className='row'>
  <div className='col-md-4 col-lg-4'>
  <a href="#/" class="navbar-brand">
  <img alt='logo' src='images/logo.png' /></a>
    <p>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
    </div>
    <div className='col-md-4 col-lg-2'>
    <h3 class="footer-title">Company</h3>
            <div className="menuswrap linkswrap">
              <ul>
                <li><IoIosArrowForward/> <a href="/#">Home</a></li>
           
                <li> <IoIosArrowForward/> <a href="/#">About Us</a></li>
                <li> <IoIosArrowForward/> <a href="/#">A page</a></li>
                <li> <IoIosArrowForward/> <a href="/#">Another page</a></li>
                <li> <IoIosArrowForward/> <a href="/#" style={{borderRight:"none"}}>Contact Us</a></li>
                </ul>
            </div>
            </div>


            <div className='col-md-4 col-lg-3'>
    <h3 class="footer-title">Courses Category</h3>
            <div className="menuswrap  linkswrap">
              <ul>
                <li><IoIosArrowForward/>  <a href="/#">Engineering</a></li>
           
                <li><IoIosArrowForward/>  <a href="/#">Business Studies</a></li>
                <li><IoIosArrowForward/>  <a href="/#">Health Sciences</a></li>
                <li><IoIosArrowForward/>  <a href="/#">Law & Legal Studies</a></li>
                <li><IoIosArrowForward/>  <a href="/#" style={{borderRight:"none"}}>Education Teaching</a></li>
                </ul>
            </div>
            </div>
            <div className='col-md-4 col-lg-3'>
    <h3 class="footer-title ">Contact Us</h3>
            <div className="menuswrap menuswrap">
              <ul className='ico'>
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