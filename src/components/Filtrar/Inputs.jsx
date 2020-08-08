import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useRouteMatch, Link } from "react-router-dom";

const Inputs = ({ categorias }) => {

  // const [condition, setCondition] = React.useState(null);
  const [conditionLink, setConditionLink] = React.useState(false);

  const { _id, subCategorys } = categorias;
  const match = useRouteMatch("/category/:id");
  const { id } = match.params;

  useEffect(() => {
    if (id === categorias.category ) {
      setConditionLink(true)
    } else {
      setConditionLink(false)
    }
  }, [categorias.category, id])

  return (

    <div className="filtrar__input">
     
        <div  key={_id}>
          <input
            type="radio"
            name="input__name"
            className="filtrar__principalInput-radio"/>
         
            <Link to={`/category/${categorias.category}`} className="input__anchor, principalInput">
    
            <span className={`principalInput__custom input__custom ${conditionLink? "toogle__inputCustom" : ""}`}></span>
            <label className={`input__title ${conditionLink ? "toggle__color" : "hola"}`}>
              {categorias.category}
            </label>
       
            </Link>
         
         
       {subCategorys.map((subcategory) => (
            <div key={subcategory._id}>

              <input
                type="radio"
                name="input__name"
                className="filtrar__subInput-radio"
                // onClick={() => setCondition(_id)}
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
