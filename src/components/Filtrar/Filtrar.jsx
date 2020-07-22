import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Categories from './Categories';
import Inputs from "./Inputs";
import Axios from '../../config/axios'

const Filtrar = () => {

  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    Axios.get('/api/category',categorias)
      .then((res) => {
        setCategorias(res.data.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  // const input01 = {
  //   title: "Moda mujeres",
  //   stitle1: "Zapatillas",
  //   stitle2: "Polos",
  //   stitle3: "Buzos",
  //   stitle4: "Sudaderas",
  //   inputName: "input1",
  // };
  // const input02 = {
  //   title: "Moda hombres",
  //   stitle1: "Zapatillas",
  //   stitle2: "Polos",
  //   stitle3: "Buzos",
  //   stitle4: "Sudaderas",
  //   inputName: "input2",
  // };
  // const input03 = {
  //   title: "Accesorios",
  //   stitle1: "Relojes",
  //   stitle2: "Pulseras",
  //   stitle3: "Ligas",
  //   stitle4: "Guantes",
  //   inputName: "input3",
  // };


  return (
    <Container className="category">
      <Container className="filtrar">
        <div key="hola">
          <Inputs />
        </div>
      </Container>
      <Container className="categories">
   <Categories />
      </Container>
    </Container>
  );
};

export default Filtrar;
