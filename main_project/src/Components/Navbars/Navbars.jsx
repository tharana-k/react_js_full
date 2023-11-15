import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import './Navbars.css'
import { Link } from 'react-router-dom'


function Navbars() {
  return (
    <div className='container-fluid navbar_container-fluid'>
 <Navbar expand="lg" className="bg-body-tertiary">
   
        <Navbar.Brand href="/">
          <img alt='logo' src='images/logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About Us</Link>
          <Link to="/courses" className='nav-link'>Courses</Link>
          <Link to="/Team1" className='nav-link'>Our Team</Link>
          <Link to="/contactUs" className='nav-link'>Contact Us</Link>
           
           
          </Nav>
        </Navbar.Collapse>
        <div className="header-call-to-action ">
         <Link to="/joinus" className="action-button" style={{margin: "0 8px"}}>Join us now</Link>      
         <Link to="/adminlogin" className="action-button">Admin Login</Link>                     
       </div>
      
    </Navbar>

    </div>
  )
}

export default Navbars