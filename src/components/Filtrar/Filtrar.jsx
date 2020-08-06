import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Inputs from "./Inputs";
import Axios from "../../config/axios";
import "../../assets/css/main.css";

const Filtrar = () => {
  const [categorias, setCategorias] = useState([]);
  const [activado, setActivado] = useState(false);

  useEffect(() => {
    Axios.get("/api/category", categorias)
      .then((res) => {
        setCategorias(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className="category">
      <h1>Filtro</h1>
      <Container className="filtrar">
        <div>
          {categorias.map((categorias) => (
            <Inputs key={categorias._id} categorias={categorias} activado={activado} />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Filtrar;
