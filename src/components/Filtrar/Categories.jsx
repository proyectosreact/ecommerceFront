import React, { useState, useEffect } from "react";
import Axios from "axios";
const Categories = () => {
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setsubCategorias] = useState([]);

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

  const CategoryName = (
    <ul>
      {categorias.map((categoria) => (
        <li key={categoria.id}>{categoria.category}</li>
      ))}
    </ul>
  );

  const SubCategoryName = subcategorias.map((subCategoria) => (
    <div key={subCategoria.id}>
      <h3>{subCategoria.subCategory}</h3>
    </div>
  ));


  return (
    <div>
      {CategoryName}
      <hr />
      {SubCategoryName}

    </div>
  );
};

export default Categories;
