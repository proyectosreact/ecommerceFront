import React from "react";
import { Container } from "react-bootstrap";
import Categories from './Categories';
import Inputs from "./Inputs";

const Filtrar = () => {

  return (
    <Container className="category">
      <Container className="filtrar">
        <div key="hola">
          <Inputs />
          {/* <Inputs /> 
          <Inputs /> */}
        </div>
      </Container>
      <Container className="categories">
            <Categories />
      </Container>
    </Container>
  );
};

export default Filtrar;
