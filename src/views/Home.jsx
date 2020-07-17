import React,{useState} from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import slide from '../assets/img/slide.png'
import zapatilla from '../assets/img/zapatilla.png'
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'


const  Home = () => {
    return ( 
        <>
        <Header></Header>
        <Menu></Menu>
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
            <h1 className="cards__title">Categorias</h1>
            <Row>
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
        {/* <Footer></Footer> */}
        </>
     );
}
 
export default Home;