import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Axios from "../../config/axios";

const Inputs = ({ categorias }) => {
  // ------------ Get Categorys in Hooks ----------
  // const [categorias, setCategorias] = useState([]);
  // const [subcategorias, setsubCategorias] = useState([]);
  // --------------Toggle className---------------
  const [condition, setCondition] = React.useState(null);
  // -----------------AXIOS get-------------------
  const { _id, category, createdAt, subCategorys } = categorias;

  return (

    <div className="filtrar__input">
     
        <div  key={_id}>
          <input
            type="radio"
            name="input__name"
            className="filtrar__principalInput-radio"/>
         
          <Row className="principalInput">
            <span className={`principalInput__custom input__custom ${condition === _id ? "toogle__inputCustom" : ""}`}></span>
            <label className={`input__title ${condition === _id ? "toggle__color" : "hola"}`}>
              {categorias.category}
            </label>
          </Row>
         
         
       {subCategorys.map((subcategory) => (
            <div >

              <input
                type="radio"
                name="input__name"
                className="filtrar__subInput-radio"
                onClick={() => setCondition(_id)}
              />
            
              <Row className="subInput">
                <span className="subInput__custom input__custom"></span>
                <label className="input__title">
                  {subcategory.subCategory}
                </label>
              </Row>
            </div>
       ))}

       
        </div>
    </div>

  );
};

export default Inputs;
