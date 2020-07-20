import React from 'react';
import '../assets/css/main.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button type="button" onClick={decoratedOnClick} className="button_subcategoria">
        {children}
      </button>
    );
  }

  const  Pedidos = () =>{
    return ( 
        <>
             <Container>
                <Row>
                    <Col className="title_categorias"><h1>PEDIDOS</h1></Col>
                </Row>
             </Container>
                

            <Container>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header className="Pedidos_card_header">
                        <Row>
                           <Col md={8} > <h3 className="pedidos_identificador">N°2121212121 </h3> </Col>
                            <Col md={.5} className="pedidos_estado"> <h4 className="pedidos_estado_text">INGRESADO</h4> </Col>
                           <Col md={1}> <CustomToggle eventKey="0" className="pedidos_button_historial"><h4 className="pedidos_button_historial_text">HISTORIAL</h4></CustomToggle>  </Col>

                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Container>
        </>
    );
}

export default Pedidos;