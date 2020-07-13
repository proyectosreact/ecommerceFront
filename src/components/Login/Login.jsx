import React from 'react'
import {Container, Media, Row, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

const Login = (props) => {
    return (

        <Media>
        <Container >
         <Row className="justify-content-md-center mb-3">
          <div className="nav-item">                 
            <Button variant="outline-primary" size="lg"><Link to="/ingresar">Ingresar</Link></Button>
            <Button variant="outline-primary" size="lg"><Link to="/registrar">Registrar</Link></Button>
           </div>
         </Row>
         <Row className="justify-content-md-center"> 
            {props.children}
         </Row>
        </Container>
        </Media>
    )
}

export default Login

