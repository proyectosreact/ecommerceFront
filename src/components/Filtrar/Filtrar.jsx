import React from "react";
import { Container } from "react-bootstrap";
import Categories from './Categories';
import Inputs from "./Inputs";

const Filtrar = () => {
  // const [categorias, setCategorias] = useState([]);
  // const [subcategorias, setsubCategorias] = useState([]);
  // useEffect(() => {
  //   Axios.get("https://thawing-fortress-96804.herokuapp.com/api/category")
  //     .then((res) => {
  //       setCategorias(res.data.category);
  //       setsubCategorias(res.data.category[0].subCategorys);
  //       console.log("holaaa");
  //       console.log(res.data.category[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const input01 = {
    title: "Moda mujeres",
    stitle1: "Zapatillas",
    stitle2: "Polos",
    stitle3: "Buzos",
    stitle4: "Sudaderas",
    inputName: "input1",
  };
  const input02 = {
    title: "Moda hombres",
    stitle1: "Zapatillas",
    stitle2: "Polos",
    stitle3: "Buzos",
    stitle4: "Sudaderas",
    inputName: "input2",
  };
  const input03 = {
    title: "Accesorios",
    stitle1: "Relojes",
    stitle2: "Pulseras",
    stitle3: "Ligas",
    stitle4: "Guantes",
    inputName: "input3",
  };

  return (
    <Container className="category">
      <Container className="filtrar">
        <div>
          <Inputs input={input01} />
          <Inputs input={input02} />
          <Inputs input={input03} />
        </div>
      </Container>
      <Container className="categories">
            <Categories />
      </Container>
    </Container>
  );
};

export default Filtrar;
