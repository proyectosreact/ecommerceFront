import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

const Menu = () => {
    return ( 
        <>
        <Router>
            <Switch>
                <Nav defaultActiveKey="/" as="ul" 
                >
                <Nav.Item as="li">
                    <Nav.Link href="/category" className="nav__link">Moda Mujer</Nav.Link>
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
            </Switch>
        </Router>
        </>
      );
}
 
export default Menu;