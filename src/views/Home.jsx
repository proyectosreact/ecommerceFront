import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slide from "../assets/img/slide.png";
import zapatilla from "../assets/img/zapatilla.png";
import "../assets/css/main.css";
import Header from "../components/Header/Header";
import Menu from "../components/Nav/Nav";
import Axios from "axios";
const Home = () => {
  const [CategoryTitle, setCategoryTitle] = useState([]);
  useEffect(() => {
    Axios.get("https://thawing-fortress-96804.herokuapp.com/api/category")
      .then((res) => {
        setCategoryTitle(res.data.category[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Carousel interval="2000" indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={slide} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Container className="cards">
        <h1 className="cards__title">Categorias</h1>
        <Row>
          {
          // CategoryTitle.map((categoria) => (
          //   <Col xs={12} sm={4} md={4} lg={4} key={categoria.id}>
          //     <Link to={`/category/${categoria.category}`}>
          //       <Card className="cards__card">
          //         <Card.Img src={zapatilla} />
          //         <Card.Body className="cards__body">
          //           <Card.Title>{categoria.category}</Card.Title>
          //         </Card.Body>
          //       </Card>
          //     </Link>
          //   </Col>
          // ))
          }
        </Row>
      </Container>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
