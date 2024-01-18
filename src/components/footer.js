import React from "react";



import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer()
{
    return(
        <div className="footerbg">
            <Container>
            <h1 className="footerheading">JUST CARE SERVICES</h1>

            <Row>
                <Col lg={4}>
                    <h2>CONTACT DETAILS</h2>
                    <p>0412 798 469</p>
                    <a href="info@justcareservices.com.au">info@justcareservices.com.au</a>
                </Col>
                <Col lg={4}>
                    <h2>USEFUL LINKS</h2>
                    <LinkContainer to="/values" className="footer-links"><Link>Our Values</Link></LinkContainer>
                    <LinkContainer to="/privacy" className="footer-links"><Link>Privacy Policy</Link></LinkContainer>
                    <LinkContainer to="/careers" className="footer-links"><Link>Careers</Link></LinkContainer>
                    <LinkContainer to="/diversity" className="footer-links"><Link>Diversity</Link></LinkContainer>
                    <a href="https://www.google.com/" className="footer-links">Google</a>
                    <a href="https://www.youtube.com/" className="footer-links">Youtube</a>
                </Col>
                <Col lg={4}>
                <h2>RECONCILIATION STATEMENT</h2>
                <p>In the spirit of Reconciliation, Just Care Services acknowledges Aboriginal and Torres Strait Islander peoples as the Traditional Owners and Custodians of this country, and acknowledges their connection to land, water and community. We pay our respect to them, their cultures and customs, and to Elders past, present and emerging.</p>
                </Col>
            </Row>
            <p>© 2023 Just Care Services. All rights reserved.</p>
            <p>ABN 74 666 663 341</p>
            </Container>
        </div>
    );
}