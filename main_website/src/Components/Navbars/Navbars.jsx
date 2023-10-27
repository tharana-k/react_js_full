import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Navbars.css'
import { Link } from 'react-router-dom'


function Navbars() {
  return (
    <div>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img alt='logo' src='https://themes.pixelstrap.net/mega_bot/assets/images/logo.svg' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/services" className='nav-link'>Services</Link>
          <Link to="/logo" className='nav-link'>Logos</Link>
          <Link to="/" className='nav-link'>Contact Us</Link>
           
           
          </Nav>
        </Navbar.Collapse>
        <div className="header-call-to-action ">
                                    <a href="#/" className="action-button">Get a quote</a>
                                
                                </div>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbars