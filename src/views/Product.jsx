import React from 'react';
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import producto from '../assets/img/producto_cuadro.png'
import Media from 'react-bootstrap/Media'

const  Product  = () => {
    return ( 
        <>
    <Header></Header>
    <Menu></Menu>
    <Container>
        <Row className="Row_colum">
        <h2 className="color_product_tittle_gris product_tittle">Zapatillas Mujer</h2>
        <h2 className="color_product_tittle">/ Adidas Sport - Shakira</h2>
        </Row>
    </Container>
    <Media>
    <Container className="container_center">
        <Row xs={2} md={2} sm={2} className="containerP_margin">
            <Col className="product_foto">
            <Image src={producto} rouded fluid/>
            </Col>
            <Media.Body>
            <Col >
            <h3 className="product_name">Adidas Sport - Shakira</h3>
            </Col>
            <Col>
            <h3 className="product_precio">$/.25.00</h3>
            </Col>
            <Col> 
            <p className="product_SKU">SKU: 76sa6</p>
            </Col>
            <Col>
            <p className="product_descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
            <Container className="button_center">
                <button className="product_button_menos"> <p className="product_button_iconmenos" >-</p> </button>
                    <input className="product_imput" type="text" value="1" />
                <button className="product_button_mas"> <p className="product_button_iconmas" >+</p> </button>
            </Container>
            <Container className="button_center2">
                <button className="button_addcart"> <p className="product_button_addcart_text">Agregar a Carrito</p> </button>
            </Container>

            </Media.Body>
        </Row>
    </Container>
    </Media>
    <Footer></Footer>
    </>
    );
}
export default Product;