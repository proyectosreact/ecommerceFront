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
        
            <Container>
                <Row className="category_table_text justify-content-center">
                    <Col md={9} className="title_category">1 MODA HOMBRE</Col>
                    <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
                </Row>

                {/* desplegable subcategoria */}

                <Container className="desplegable_container">
                    <Col> 
                        <Accordion>
                            <Card className="card_button_subcategoria" >
                                <Card.Header className="card_button_subcategoria_header" >
                                    <BotonDesplegar eventKey="0">SUBCATEGORIAS</BotonDesplegar>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="card_button_subcategoria_body"> 
                                            <Container>
                                            <Row className="justify-content-center align-items-center">
                                                <h5 className="subtitle_agregarC">AGREGAR SUBCATEGORIA</h5>
                                                <input className="input_agregarC"></input> 
                                                <button className="button_agregar">
                                                    <p className="button_agregarC_text">AGREGAR</p>
                                                </button> 
                                            </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>1 ZAPATOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>2 POLOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>3 SHORTS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>

                                            </Container>
                                        </Card.Body>

                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Container>
            </Container>


            <Container>
                <Row className="category_table_text justify-content-center">
                    <Col md={9} className="title_category">2 MODA MUJER</Col>
                    <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
                </Row>

                {/* desplegable subcategoria */}

                <Container className="desplegable_container">
                    <Col> 
                        <Accordion>
                            <Card className="card_button_subcategoria" >
                                <Card.Header className="card_button_subcategoria_header" >
                                    <BotonDesplegar eventKey="1">SUBCATEGORIAS</BotonDesplegar>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body className="card_button_subcategoria_body"> 
                                            <Container>
                                            <Row className="justify-content-center align-items-center">
                                                <h5 className="subtitle_agregarC">AGREGAR SUBCATEGORIA</h5>
                                                <input className="input_agregarC"></input> 
                                                <button className="button_agregar">
                                                    <p className="button_agregarC_text">AGREGAR</p>
                                                </button> 
                                            </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>1 ZAPATOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>2 POLOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>3 SHORTS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>

                                            </Container>
                                        </Card.Body>

                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Container>
            </Container>


            <Container>
                <Row className="category_table_text justify-content-center">
                    <Col md={9} className="title_category">3 NIÑOS</Col>
                    <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
                </Row>

                {/* desplegable subcategoria */}

                <Container className="desplegable_container">
                    <Col> 
                        <Accordion>
                            <Card className="card_button_subcategoria" >
                                <Card.Header className="card_button_subcategoria_header" >
                                    <BotonDesplegar eventKey="2">SUBCATEGORIAS</BotonDesplegar>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body className="card_button_subcategoria_body"> 
                                            <Container>
                                            <Row className="justify-content-center align-items-center">
                                                <h5 className="subtitle_agregarC">AGREGAR SUBCATEGORIA</h5>
                                                <input className="input_agregarC"></input> 
                                                <button className="button_agregar">
                                                    <p className="button_agregarC_text">AGREGAR</p>
                                                </button> 
                                            </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>1 ZAPATOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>2 POLOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>3 SHORTS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>

                                            </Container>
                                        </Card.Body>

                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Container>
            </Container>


            <Container>
                <Row className="category_table_text justify-content-center">
                    <Col md={9} className="title_category">4 ACCESORIOS</Col>
                    <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
                </Row>

                {/* desplegable subcategoria */}

                <Container className="desplegable_container">
                    <Col> 
                        <Accordion>
                            <Card className="card_button_subcategoria" >
                                <Card.Header className="card_button_subcategoria_header" >
                                    <BotonDesplegar eventKey="0">SUBCATEGORIAS</BotonDesplegar>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="card_button_subcategoria_body"> 
                                            <Container>
                                            <Row className="justify-content-center align-items-center">
                                                <h5 className="subtitle_agregarC">AGREGAR SUBCATEGORIA</h5>
                                                <input className="input_agregarC"></input> 
                                                <button className="button_agregar">
                                                    <p className="button_agregarC_text">AGREGAR</p>
                                                </button> 
                                            </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>1 ZAPATOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>2 POLOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>3 SHORTS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>

                                            </Container>
                                        </Card.Body>

                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Container>
            </Container>

            
            <Container>
                <Row className="category_table_text justify-content-center">
                    <Col md={9} className="title_category">5 MAQUINAS</Col>
                    <Col md={{ span: 1, offsen:1 }}> <button className="button_subcategoria_borrar">BORRAR</button></Col>
                </Row>

                {/* desplegable subcategoria */}

                <Container className="desplegable_container">
                    <Col> 
                        <Accordion>
                            <Card className="card_button_subcategoria" >
                                <Card.Header className="card_button_subcategoria_header" >
                                    <BotonDesplegar eventKey="0">SUBCATEGORIAS</BotonDesplegar>
                                </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="card_button_subcategoria_body"> 
                                            <Container>
                                            <Row className="justify-content-center align-items-center">
                                                <h5 className="subtitle_agregarC">AGREGAR SUBCATEGORIA</h5>
                                                <input className="input_agregarC"></input> 
                                                <button className="button_agregar">
                                                    <p className="button_agregarC_text">AGREGAR</p>
                                                </button> 
                                            </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>1 ZAPATOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>2 POLOS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>
                                            </Container>

                                            <Container>
                                                <Row className="category_table_text_product justify-content-center">
                                                    <Col md={9}>3 SHORTS</Col>
                                                    <Col md={{ span: 1, offsen:1 }}> <button className="button_product_borrar">BORRAR</button></Col>
                                                </Row>

                                            </Container>
                                        </Card.Body>

                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Container>
            </Container>


        </Container>

        
            
        
        </>
        );
}

export default AdminCategory;