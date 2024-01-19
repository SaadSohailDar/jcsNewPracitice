import React from "react";



import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {footerLinks} from './footerLinks.js';

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

                    
                    {footerLinks.map((link, index) => (
                        <LinkContainer key={index} to={link.url} className="footer-links">
                            <Link>{link.title}</Link>
                        </LinkContainer>
                    ))}
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