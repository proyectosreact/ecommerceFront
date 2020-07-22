import React from 'react';
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import "../assets/css/main.css";
import Form from 'react-bootstrap/Form'

const Contact = () => {
    return (
        <>
            <Header></Header>
            <Menu></Menu>
            <Container className="form__container">
                <Row className="Row_colum">
                    <h2 className="Contactenos_label">Contactenos</h2>

                </Row>
            </Container>

            <div className="form__container">
                <>

                    <Form className="form__contact">
                        <div className="part_one">

                            <Form.Row controlId="rowName">
                                <div>
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control placeholder="Ingrese su nombre" />
                                    </Form.Group>
                                </div>


                                <div>
                                    <Form.Group as={Col} controlId="formGridLastname">
                                        <Form.Label>Apellidos</Form.Label>
                                        <Form.Control placeholder="Ingrese su apellido" />
                                    </Form.Group>
                                </div>
                            </Form.Row>
                        </div>

                        <div className="part__two">
                            <Form.Row>
                                <div>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group as={Col} controlId="formGridCelular">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control placeholder="Ingrese un numero" />
                                    </Form.Group>
                                </div>
                            </Form.Row>
                        </div>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder="Escribe un comentario..."
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Captcha</Form.Label>
                            <Form.Control
                                type="captcha"
                                placeholder="Apartment, studio, or floor"
                            />
                        </Form.Group>
                        <Container className="form__container">
                            <Button variant="success" type="submit">
                                Enviar
                            </Button>
                        </Container>

                    </Form>
                    {/* <button>
  <strong>Enviar</strong>
</button> */}

                </>
            </div>
        </>
    );
}
export default Contact;