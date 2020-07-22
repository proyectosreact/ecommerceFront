import React from 'react';
import '../../assets/css/main.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";
import logo from '../../assets/img/logo.png'
const footer = () => {
    return(
        <>
        <footer>
        <Container fluid className="footer_container">
            <Row className="footer_logo">
                <Col >
                    <Image src={logo} />
                </Col>
            </Row>
            <Row>
                <Col >
                <h3 className="footer_derechos">TODOS LOS DERECHOS RESERVADOS</h3>
                </Col>
            </Row>
        </Container>
        </footer>
        </>
    );
}

export default footer;