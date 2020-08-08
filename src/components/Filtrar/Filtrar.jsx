import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Inputs from "./Inputs";
import Axios from "../../config/axios";
import "../../assets/css/main.css";

const Filtrar = () => {
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    Axios.get("/api/category", )
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
      <Container className="filtrar">
        <div key="hola">
          {categorias.map((categorias) => (
            <Inputs key={categorias._id} categorias={categorias} />
          ))}
          
        </div>
      </Container>
      <Container className="categories">
        <ul>
          {categorias.map((categorias) => (
            <li key={categorias.category}>
              <h2 key={categorias.category}>{categorias.category}</h2>
              {/* <h2 key={categorias.subCategorys}>{categorias.subCategorys[0].subCategory}</h2>  
                 <h2 >{categorias.category.subCategorys.subCategory}</h2> */}
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
};

export default Filtrar;
