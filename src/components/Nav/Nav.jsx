import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [CategoryTitle, setCategoryTitle] = useState([]);
  useEffect(() => {
    Axios.get("https://thawing-fortress-96804.herokuapp.com/api/category")
      .then((res) => {
        setCategoryTitle(res.data.category);
        console.log("holaaa");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Nav defaultActiveKey="/category" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/" className="nav__link">
            Moda Mujer
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          {CategoryTitle.map((categoria) => (
            <NavLink
              to={`/category/${categoria.category}`}
              key={categoria.category}
              activeClassName="nav__select"
              className="nav__link nav-link"
            >
              {categoria.category}
            </NavLink>
          ))}
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="nav__link">Moda Niño</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="nav__link">
            Accesorios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="nav__link">
            Maquinas
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Menu;
