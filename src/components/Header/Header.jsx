import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo from '../../assets/img/logo.png'
import Image from 'react-bootstrap/Image'

// import {Link} from 'react-router-dom'
const Header = ({email}) => {
    return ( 
        <>
        <header>
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Navbar.Brand href="/">
                <Image src={logo} className="navbar__image"></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="ml-auto nav__toggle">
                    <Nav.Link>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 navbar__search" />
                        <i className="gg-search"></i>
                        </Form>
                    </Nav.Link>
                    <Nav.Link href="#deets" className="navbar__sign"><i className="gg-user"></i></Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    {email}
                    </Nav.Link>
                    

                    <Nav.Link >More deets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </header>
        </>
     );
}
 
export default Header;