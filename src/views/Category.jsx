import React from 'react'
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../assets/css/main.css";
import Form from 'react-bootstrap/Form'






const Category = () => {
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


        </>
    );
}

export default Category;