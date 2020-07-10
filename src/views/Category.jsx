import React from "react";
import Header from "../Components/Header/Header";
import Menu from "../Components/Nav/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import producto from "../assets/img/producto.png";
import Filtrar from '../Components/Filtrar/Filtrar'


const Category = () => {
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Container>
        <Row lg={6} className="filter">
          <Col>1 of asdsad1</Col>
        </Row>
        <Row xs={12} lg={6}>
          <Container className="filtermobile">
            <h1>Filtro</h1>
            <Row>
              <Col xs={12} className="filtermobile__button">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs={12} className="filtermobile__button">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Dropdown button"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </Col>

            </Row>
          </Container>

        </Row>

    <Filtrar />
      </Container>
    </>
  );
};

export default Category;
