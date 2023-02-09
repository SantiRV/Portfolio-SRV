import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import "../styles/navbar.css";

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg" className="nav-bar" >
      <Navbar.Brand href="#home">Santiago Rambeaud Vazquez</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* <Nav className="ml-auto">
          <Nav.Link to="/About">About</Nav.Link>
          <Nav.Link to="/Skills">Skills</Nav.Link>
          <Nav.Link to="/Projects">Projects</Nav.Link>
          <Nav.Link to="/Contact">Contact</Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;