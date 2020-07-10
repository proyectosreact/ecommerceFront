import React from 'react';
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import producto from '../assets/img/producto.png'
const  sale  = () => {
    return ( 
        <>
    <Header></Header>
    <Menu></Menu>
    <Container>
        <Row>
        <h1>Zapatillas Mujer</h1>
        <h2>/ Adidas Sport Shakira</h2>
        </Row>
    </Container>

    <Container>
    <Col xs={6} md={4}>
      <Image src={producto} rouded fluid/>
    </Col>
    </Container>
    </>
    );
}
export default sale;