import React from 'react'
import {Container, Media, Row, Button, Image} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/img/logo.png'

const Login = (props) => {
    return (
        <div>
        <Link to="/" className="close p-0">
        <FontAwesomeIcon className="close-btn" icon={faTimesCircle} size="2x" />
        </Link>
        <Media>
        <Container className="login">
        <Image src={logo} ></Image>
         <Row className="justify-content-md-center mb-3"> 
          <div className="iconos__login">                 
            <Link to="/ingresar" >
                <Button variant="outline-primary  "  className="icono__login">
                <FontAwesomeIcon icon={faCircleNotch} size="lg" className="mr-3"/>
                Ingresar
                </Button>
            </Link>
            <Link to="/registrar" >
                <Button variant="outline-primary"  className="icono__login">
                <FontAwesomeIcon icon={faCircleNotch} size="lg" className="mr-3 font-weight-bold"/>
                Registrar            
                </Button>
            </Link>
           </div>
         </Row>
         <Row className="justify-content-md-center"> 
            {props.children}
         </Row>
        </Container>
        </Media>
        </div>
    )
}

export default Login

