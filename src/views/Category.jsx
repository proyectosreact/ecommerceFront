import React from 'react'
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import producto from '../assets/img/producto.png'

const Category = () => {
    return ( 
        <>
        <Header></Header>
        <Menu></Menu>
        <Container >
            <Row lg={6} className="filter">
                <Col>1 of asdsad1</Col>
            </Row>
            <Row xs={12} lg={6}>
                <Container className="filtermobile">
                    <h1>Filtro</h1>
                <Row>
                <Col xs={12} className="filtermobile__button">
                    <h1>HOLA</h1>
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                <Col xs={12} className="filtermobile__button">
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                </Col>
                </Row>
                </Container>
                
                <Col md={12}><h1>Moda Mujer</h1></Col>
                <Col xs={12} sm={4} md={4} lg={4} >
                    <Card className="cards__card">
                        <Card.Img  src={producto}/>
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Hombre</Card.Title>
                        </Card.Body>
                    </Card>
                </Col >
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={producto} />
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Niño</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={producto} />
                        <Card.Body className="cards__body">
                            <Card.Title>Accesorios</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={producto} />
                        <Card.Body className="cards__body">
                            <Card.Title>Maquinas</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4} >
                    <Card className="cards__card">
                        <Card.Img  src={producto}/>
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Hombre</Card.Title>
                        </Card.Body>
                    </Card>
                </Col >
            </Row>
        </Container>
        
        </>
     );
}
 
export default Category;