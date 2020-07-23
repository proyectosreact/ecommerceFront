import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "../../assets/img/logo.png";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
const Header = ({ email }) => {
  const totalPrice = 299;
  const totalProducts = 5;
  const userName = "Anonymous";
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Brand href="/">
            <Image src={logo} className="navbar__image"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav__toggle nav__components">
              <Nav.Link>
                <Form inline className="navbar__search">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 navbar__search-form"
                  />
                  <i className="gg-search"></i>
                </Form>
              </Nav.Link>
              <Nav.Link href="#deets" className="navbar__sign">
                <i className="gg-user"></i>
                <h6>{userName}</h6>
                <FontAwesomeIcon icon={faChevronDown} />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {email}
              </Nav.Link>

              <Nav.Link className="nav__pay">
                <Container className="nav__carrito">
                  <h5>S/.{totalPrice}</h5>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <div className="carrito__number">
                    <h4>{totalProducts}</h4>
                  </div>
                </Container>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
