import React from 'react';
import '../assets/css/main.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import Table from 'react-bootstrap/Table'


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
                    <Col className="title_categorias pedidos_title"><h1>PEDIDOS</h1></Col>
                </Row>
             </Container>
                

            <Container>
            <Accordion defaultActiveKey="">
                <Card className="pedidos_cards">
                    <Card.Header className="Pedidos_card_header">
                        <Row>
                           <Col md={8} > <h3 className="pedidos_identificador">N°2121212121 </h3> </Col>
                            <Col md={.5} className="pedidos_estado_ingresado"> <h4 className="pedidos_estado_text">INGRESADO</h4> </Col>
                           <Col md={1}> <CustomToggle eventKey="0" className="pedidos_button_historial"><h4 className="pedidos_button_historial_text">HISTORIAL</h4></CustomToggle>  </Col>

                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body className="desplegable_pedidos">
                      <Container>
                        <Table className="table_pedidos" responsive>
                          <thead>
                            <tr>
                              <th>SKU</th>
                              <th>PRODUCTO</th>
                              <th>CANTIDAD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                      <Row>
                      <Col >
                        <Table className="table_pedidos_estado" responsive>
                          <tbody>
                            <tr>
                              <td>25/06</td>
                              <td>INGRESADO</td>
                            </tr>
                            <tr>
                              <td>27/06</td>
                              <td>FACTURADO</td>
                            </tr>
                            <tr>
                              <td>28/06</td>
                              <td>EN PROCESO</td>
                            </tr>
                            <tr>
                              <td>29/06</td>
                              <td>ENTREGADO</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col>
                        <button className="button_cambio_estado_pedidos">CAMBIO DE ESTADO</button>
                      </Col>
                      </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="pedidos_cards">
                    <Card.Header className="Pedidos_card_header">
                        <Row>
                           <Col md={8} > <h3 className="pedidos_identificador">N°2121212121 </h3> </Col>
                            <Col md={.5} className="pedidos_estado_facturado"> <h4 className="pedidos_estado_text">FACTURADO</h4> </Col>
                           <Col md={1}> <CustomToggle eventKey="1" className="pedidos_button_historial"><h4 className="pedidos_button_historial_text">HISTORIAL</h4></CustomToggle>  </Col>

                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body className="desplegable_pedidos">
                      <Container>
                        <Table className="table_pedidos" responsive>
                          <thead>
                            <tr>
                              <th>SKU</th>
                              <th>PRODUCTO</th>
                              <th>CANTIDAD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                      <Row>
                      <Col >
                        <Table className="table_pedidos_estado" responsive>
                          <tbody>
                            <tr>
                              <td>25/06</td>
                              <td>INGRESADO</td>
                            </tr>
                            <tr>
                              <td>27/06</td>
                              <td>FACTURADO</td>
                            </tr>
                            <tr>
                              <td>28/06</td>
                              <td>EN PROCESO</td>
                            </tr>
                            <tr>
                              <td>29/06</td>
                              <td>ENTREGADO</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col>
                        <button className="button_cambio_estado_pedidos">CAMBIO DE ESTADO</button>
                      </Col>
                      </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="pedidos_cards">
                    <Card.Header className="Pedidos_card_header">
                        <Row>
                           <Col md={8} > <h3 className="pedidos_identificador">N°2121212121 </h3> </Col>
                            <Col md={.5} className="pedidos_estado_enproceso"> <h4 className="pedidos_estado_text">EN PROCESO</h4> </Col>
                           <Col md={1}> <CustomToggle eventKey="2" className="pedidos_button_historial"><h4 className="pedidos_button_historial_text">HISTORIAL</h4></CustomToggle>  </Col>

                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body className="desplegable_pedidos">
                      <Container>
                        <Table className="table_pedidos" responsive>
                          <thead>
                            <tr>
                              <th>SKU</th>
                              <th>PRODUCTO</th>
                              <th>CANTIDAD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                      <Row>
                      <Col >
                        <Table className="table_pedidos_estado" responsive>
                          <tbody>
                            <tr>
                              <td>25/06</td>
                              <td>INGRESADO</td>
                            </tr>
                            <tr>
                              <td>27/06</td>
                              <td>FACTURADO</td>
                            </tr>
                            <tr>
                              <td>28/06</td>
                              <td>EN PROCESO</td>
                            </tr>
                            <tr>
                              <td>29/06</td>
                              <td>ENTREGADO</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col>
                        <button className="button_cambio_estado_pedidos">CAMBIO DE ESTADO</button>
                      </Col>
                      </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="pedidos_cards">
                    <Card.Header className="Pedidos_card_header">
                        <Row>
                           <Col md={8} > <h3 className="pedidos_identificador">N°2121212121 </h3> </Col>
                            <Col md={.5} className="pedidos_estado_entregado"> <h4 className="pedidos_estado_text_white">EN PROCESO</h4> </Col>
                           <Col md={1}> <CustomToggle eventKey="3" className="pedidos_button_historial"><h4 className="pedidos_button_historial_text">HISTORIAL</h4></CustomToggle>  </Col>

                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body className="desplegable_pedidos">
                      <Container>
                        <Table className="table_pedidos" responsive>
                          <thead>
                            <tr>
                              <th>SKU</th>
                              <th>PRODUCTO</th>
                              <th>CANTIDAD</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>2</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>3</td>
                            </tr>
                            <tr>
                              <td>1212</td>
                              <td>PAPEL HIGENICO</td>
                              <td>6</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                      <Row>
                      <Col >
                        <Table className="table_pedidos_estado" responsive>
                          <tbody>
                            <tr>
                              <td>25/06</td>
                              <td>INGRESADO</td>
                            </tr>
                            <tr>
                              <td>27/06</td>
                              <td>FACTURADO</td>
                            </tr>
                            <tr>
                              <td>28/06</td>
                              <td>EN PROCESO</td>
                            </tr>
                            <tr>
                              <td>29/06</td>
                              <td>ENTREGADO</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col>
                        <button className="button_cambio_estado_pedidos">CAMBIO DE ESTADO</button>
                      </Col>
                      </Row>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                </Accordion>
            </Container>
        </>
    );
}
export default Pedidos;