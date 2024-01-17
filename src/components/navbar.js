import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

import Logo from '../assets/logo.png';

import './navbar.scss';

import {Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


export default function NavigationBar()
{
  return(
 
    <Navbar expand="lg" bg="light" data-bs-theme="light">
    
        <Container>
        
        <LinkContainer to="/">
        <Navbar.Brand to="/">
                        <img src={Logo} className="navbar-brand " alt="Just Care Services"/>
         </Navbar.Brand>
         </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/features"><Nav.Link>Features</Nav.Link></LinkContainer>
              <LinkContainer to="/pricing"><Nav.Link>Pricing</Nav.Link></LinkContainer>
              
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