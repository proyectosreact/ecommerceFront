
import React,{useState, useEffect} from 'react';
import Carousel  from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import slide from '../assets/img/slide.png'
import zapatilla from '../assets/img/zapatilla.png'
import Header from '../components/Header/Header'
import Menu from '../components/Nav/Nav'
import Axios from '../config/axios'
import Categories from '../components/Categories/Categories'


const  Home = () => {
    // const[email,setEmail]=useState(this.props.location.state && this.props.location.state.referrer)

// import Nav from 'react-bootstrap/Nav'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//   } from "react-router-dom";

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

// const email = localStorage.getItem('email')
// const token = localStorage.getItem('token')
    return ( 
        <>
        <Header ></Header>
        <Menu></Menu>
        <Carousel interval="2000" indicators={false}>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide}
            alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={slide}
                alt="Second slide"
                /> 
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={slide}
            alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>

        <Container className="cards">
        <h1 className="cards__title">Categorias</h1>
            <Row>
                {/* {
                categories.map(categories => (

                ))
                } */}
                {/*
                 categorias.map((categorias) => (
            //   <li key={categorias.category}>
            //     <h2 key={categorias.category}>{categorias.category}</h2> 
            //     <h2 key={categorias.subCategorys}>{categorias.subCategorys[0].subCategory}</h2> 
            //     {/* <h2 >{categorias.category.subCategorys.subCategory}</h2> */}
            {/*    //   </li>
                <Categories key={categorias._id}
                categorias ={categorias}></Categories>
                ))
                }*/}
                


                {/* <Col xs={12} sm={4} md={4} lg={4} >
                    <Card className="cards__card">
                        <Card.Img  src={zapatilla}/>
                        <Card.Body className="cards__body">
                            <Card.Title>Moda </Card.Title>
                        </Card.Body>
                    </Card>
                </Col >
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Moda Niño</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                 <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Accesorios</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={4} md={4} lg={4}>
                    <Card className="cards__card">
                        <Card.Img variant="top" src={zapatilla} />
                        <Card.Body className="cards__body">
                            <Card.Title>Maquinas</Card.Title>
                        </Card.Body>
                    </Card>
                </Col> */}

            </Row>
        </Container>
        </>
     );
}
export default Home;

