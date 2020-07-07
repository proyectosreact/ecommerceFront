import React from 'react';
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <a href="/">
                    <img src={logo} alt='All Start'/>
                </a>
                <p>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer