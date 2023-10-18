import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Navbars.css'
import { CiSearch } from "react-icons/ci";

function Navbars() {
  return (
    <div>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img alt='logo' src='https://quomodosoft.com/html/hooper/hooper/assets/img/sticky_logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Link1</Nav.Link>
            <Nav.Link href="#link2">Link2</Nav.Link>
            <Nav.Link href="#link3">Link3</Nav.Link>
            <Nav.Link href="#link4">Link4</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="header-call-to-action ">
                                    <a href="#/" className="action-button">Get a quote</a>
                                    <button className="search-button">
                                     <CiSearch/>
                                      </button>
                                </div>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbars