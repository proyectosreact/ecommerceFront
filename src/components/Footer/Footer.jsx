import React from 'react';
import '../../assets/css/main.css'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import Card from 'react-bootstrap/Card'
import Logo from '../../assets/img/logo.png'
const footer = () => {
    return(
        <>
        <footer>
        <Container fluid>
            <Card className="text-white footer_container">
                    <Card.Title><Image src={Logo} fluid className="footer_logo"/></Card.Title>
                    <Card.Text className="footer_derechos">
                        Todos los derechos reservados
                    </Card.Text>
            </Card>
        </Container>
        </footer>
        </>
    );
}

export default footer;