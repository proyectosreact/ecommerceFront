import React, {useEffect, useState} from 'react'
import Login from '../components/Login/Login'
import {Form, Button, Row} from "react-bootstrap";

const Ingresar = (props) => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
        simulateNetworkRequest().then(() => {
            setLoading(false);
        });
        }
    }, [isLoading]);

    
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
      }

    const handleClick = () => setLoading(true);

    return (
        <Login>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ingresar Usuario</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Ingresar Contraseña</Form.Label>
                    <Form.Control sm="10" type="password"/>
                </Form.Group>
                <Button 
                variant="primary" 
                type="submit" 
                block 
                size="lg"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                >
                {isLoading ? 'Cargando…' : 'Iniciar seccion'}
                </Button>
            </Form>
        </Login>
    )
}

export default Ingresar
