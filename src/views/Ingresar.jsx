import React, {useEffect, useState} from 'react'
import Login from '../components/Login/Login'
import {Form, Button, Row} from "react-bootstrap";
import Axios from '../config/axios';
import { Link, Redirect,Route } from 'react-router-dom';
import Home from './Home';


const Ingresar = ({history}) => {
    const[loggedIn,setLoggedIn]=useState(false)
    const [user, setUser] = useState({
        email:'',
        password:''

    })
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //     simulateNetworkRequest().then(() => {
    //         setLoading(false);
    //     });
    //     }
    // }, [isLoading]);

    const onChangeData = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitData = (e)=>{
        e.preventDefault()
        Axios.post('/api/auth',user)
        .then(res => {
            console.log(res.data);
            console.log(user.email);
            setLoggedIn(true)
            // history.push('/')
        }).catch(e => {
            console.log('usuario no existe ');
        })
        return(
            <Home email={user.email}></Home>
        )
       
    }
    // function simulateNetworkRequest() {
    //     return new Promise((resolveee) => setTimeout(resolve, 2000));
    //   }

    // const handleClick = () => setLoading(true);

    return (
        
        <Login>
            {
            loggedIn ? 
            <Redirect to="/"><Home email=""></Home></Redirect>
            :
            <Form onSubmit={onSubmitData}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Ingresar Email</Form.Label>
                    <Form.Control 
                    type="email"
                    name="email"
                    onChange={onChangeData}
                     />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Ingresar Contraseña</Form.Label>
                    <Form.Control sm="10" 
                    type="password"
                    name="password"
                    onChange={onChangeData}
                    />
                </Form.Group>
              
                
                
                <Button 
                variant="primary" 
                type="submit" 
                block 
                size="lg"
                // disabled={isLoading}
                // onClick={!isLoading ? handleClick : null}
                >
                {/* // {isLoading ? 'Cargando…' : 'Iniciar seccion'} */}
                Ingresar
                </Button>
                
            </Form>
            }
        </Login>

    )
}

export default Ingresar
