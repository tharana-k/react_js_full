import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './Navbars.css'
import { Link, useNavigate } from 'react-router-dom'


function Navbars() {

const history = useNavigate();
  const sample =()=>{
history('/link1');
  }


  return (
    <div>
 <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img alt='logo' src='https://static.vecteezy.com/system/resources/thumbnails/023/654/784/small/golden-logo-template-free-png.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/link1">Link1</Nav.Link>
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
            <Link to="/link1">link button </Link>
            <Button onClick={sample}>usenavigate button</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navbars