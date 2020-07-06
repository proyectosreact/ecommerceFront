import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import slide from '../assets/img/slide.png'
import zapatilla from '../assets/img/zapatilla.png'
import logo from '../assets/img/logo.png'
import '../assets/css/main.css'

const  Home = () => {
    return ( 
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand href="#home">
                <Image src={logo} className="navbar__image"></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ml-auto ">
                    <Nav.Link>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 navbar__search" />
                        <i class="gg-search"></i>
                        </Form>
                    </Nav.Link>
                    <Nav.Link href="#deets" className="navbar__sign"><i class="gg-user">Ingresar</i></Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    <Nav.Link >More deets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Nav defaultActiveKey="/home" as="ul" >
            <Nav.Item as="li">
                <Nav.Link href="/home" className="nav__link">Moda Mujer</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-1" className="nav__link">Moda Hombre</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className="nav__link">Moda Niño</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className="nav__link">Accesorios</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link eventKey="link-2" className="nav__link">Maquinas</Nav.Link>
            </Nav.Item>
        </Nav>
        <Carousel interval="2000" indicators={false}>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide}
            alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide}
                alt="Second slide"
                /> 
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide}
            alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
        <Container className="cards">
            <h1 className="cards_title">Categorias</h1>
            <Row >
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img  src={zapatilla}/>
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Mujer</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4} >
                    <Card className="cards__card">
                        <Card.Img  src={zapatilla}/>
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Hombre</Card.Title>
                        </Card.Body>
                    </Card>
                </Col >
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Niño</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Accesorios</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Maquinas</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
        </>
     );
}
 
export default Home;