import React from 'react';
import '../assets/css/main.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
function BotonDesplegar({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button type="button" onClick={decoratedOnClick} className="button_subcategoria">
        {children}
      </button>
    );
  }

const  AdminCategory = () =>{
    return ( 
        <>

         <Container>
             <Row>
                 <Col className="title_categorias"><h1>CATEGORIAS </h1></Col>
             </Row>
        </Container>

        <Container>
            <Row className="justify-content-center align-items-center">
                <h5 className="subtitle_agregarC">AGREGAR CATEGORIA</h5>
                <input className="input_agregarC"></input> 
                <button className="button_agregar">
                    <p className="button_agregarC_text">AGREGAR</p>
                </button> 
            </Row>
        </Container>
        <Container className="category_table">

            <Row className="category_table_text justify-content-center">
                <Col md={9}>1 MODA HOMBRE</Col>
                <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
            </Row>

            <Container className="desplegable_container">
                <Col> 
                    <Accordion>
                        <Card className="card_button_subcategoria" >
                            <Card.Header className="card_button_subcategoria_header" >
                                <BotonDesplegar eventKey="0">SUBCATEGORIAS</BotonDesplegar>
                            </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body> 
                                        <Container>
                                            <Row>
                                            <Col md={8}>1 MODA HOMBRE</Col>
                                             <Col md={{ span: 1, offset: 1}}> </Col>
                                            </Row>
                                        </Container>
                                     </Card.Body>

                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
        </Container>
        </Container>

        
        </>
        );
}

export default AdminCategory;