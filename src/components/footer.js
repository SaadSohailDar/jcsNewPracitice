import React from "react";



import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer()
{
    return(
        <div>
            <Container className="footerbg">
                
            <h1>JUST CARE SERVICES</h1>
            <Row>
                <Col lg={{span:3}}>
                <p>CONTACT DETAILS</p>
                <p>0412 798 469</p>
                <a mailto="info@justcareservices.com.au">info@justcareservices.com.au</a>
                </Col>
            </Row>
            </Container>
        </div>
    );
}