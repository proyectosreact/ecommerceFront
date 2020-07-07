import React from 'react';
import Container from 'react-bootstrap/Container'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <footer>
            <Container>
                <a href="/">
                    <img src={logo} alt='All Start'/>
                </a>
                <p>Todos los derechos reservados</p>
            </Container>
        </footer>
    )
}

export default Footer