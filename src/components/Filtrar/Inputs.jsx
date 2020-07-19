import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Axios from "axios";

const Input1 = () => {
  // ------------ Get Categorys in Hooks ----------
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setsubCategorias] = useState([]);
  // --------------Toggle className---------------
  const [condition, setCondition] = React.useState(null);
  // -----------------AXIOS get-------------------
  useEffect(() => {
    Axios.get("https://thawing-fortress-96804.herokuapp.com/api/category")
      .then((res) => {
        setCategorias(res.data.category);
        setsubCategorias(res.data.category[0].subCategorys);
        console.log("holaaa");
        console.log(res.data.category[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="filtrar__input">
        {categorias.map((categorias) => (
          <>
            <input
              type="radio"
              name="input__name"
              className="filtrar__principalInput-radio"
            />
            <Row className="principalInput">
              <span className={`principalInput__custom input__custom ${condition === categorias.category ? "toogle__inputCustom" : ""}`}></span>
              <label className={`input__title ${condition === categorias.category ? "toggle__color" : "hola"}`}>
                {categorias.category}
              </label>
            </Row>
            {subcategorias.map((subcategorias) => (
              <>
                <input
                  type="radio"
                  name="input__name"
                  className="filtrar__subInput-radio"
                  onClick={() => setCondition(categorias.category)}
                />
                <Row className="subInput">
                  <span className="subInput__custom input__custom"></span>
                  <label className="input__title">
                    {subcategorias.subCategory}
                  </label>
                </Row>
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default Input1;
