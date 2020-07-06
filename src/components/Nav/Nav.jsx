import React from 'react';
import Nav from 'react-bootstrap/Nav'


const Menu = () => {
    return ( 
        <>
        <Nav defaultActiveKey="/home" as="ul" 
        >
        <Nav.Item as="li">
            <Nav.Link href="/home" className="nav__link">Moda Mujer</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-1" className="nav__link">Moda Hombre</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-2" className="nav__link">Moda Niño</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-2" className="nav__link">Accesorios</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link eventKey="link-2" className="nav__link">Maquinas</Nav.Link>
        </Nav.Item>
        </Nav>
        </>
      );
}
 
export default Menu;