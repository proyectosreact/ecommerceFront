import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import producto from '../../assets/img/producto.png'
const Categories = ({categorias}) => {
    const {_id,category}= categorias
    

    return ( 
        <>
        
        <Col xs={12} sm={4} md={4} lg={4}>
        <Link to={`/category/${_id}`}>
        <Card className="cards__card">
            <Card.Img src={producto}/>
            <Card.Body className="cards__body">
            <Card.Title >{category}</Card.Title>
            </Card.Body>
        </Card>
        </Link>
        </Col>
        
        </>
     );
}
 
export default Categories;