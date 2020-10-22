import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark"  expand="lg">
        <Navbar.Brand href="#home">DrumCare</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Packages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Silver</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gold</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Platinum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
