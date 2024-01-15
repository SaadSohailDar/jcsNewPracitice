import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../assets/logo.png'

import './navbar.scss';

import {Row,Col} from 'react-bootstrap';

export default function NavigationBar()
{
  return(
 
    <Navbar  className="bg-body-tertiary" expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home"><img  src={Logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
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


        </Container>
    </Navbar>
    );
}