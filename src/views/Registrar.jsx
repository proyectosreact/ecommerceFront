import React, {useState} from 'react'
import Login from '../components/Login/Login'
import {Form, Button} from "react-bootstrap";
import { withRouter } from 'react-router-dom'
import Axios from '../config/axios';

const Registrar = ({history}) => {

    const [users, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeData = (e) => {
        setUser({
            ...users,
            [e.target.name]: e.target.value,
            
        })
    }

    const onSubmit = async (e) => {
        // setLoading({ loading: true });
        e.preventDefault()
        Axios.post('/api/users',users)
        .then(res =>{
            console.log(res.data);
            //validar si hay errores de mongo
            // if(res.data.code === 11000){

            //     // Toast.fire({
            //     //     icon: 'error',
            //     //     html: '<p class="text-alert m">Error</p>',
            //     //     customClass: {
            //     //         popup: 'popup-class-error',    
            //     //       }
            //     //   })
            // }else{
            //     // Toast.fire({
            //     //     icon: 'success',
            //     //     html: '<p class="text-secondary m">Usuario creado satisfactoriamente</p>',
            //     //     customClass: {
            //     //         popup: 'popup-class-success',    
            //     //       }
            //     // },                  
            //     //   res.data.mensaje
            //     // )
            // }

            // setTimeout(() => {
            //     setLoading({ loading: false });
            // }, 2000);
        
            
             
             history.push('/signIn')
        }).catch(e => {
            console.log('usuario ya existe ctm');
        })

    };
    
    // const [isLoading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (isLoading) {
    //     simulateNetworkRequest().then(() => {
    //         setLoading(false);
    //     });
    //     }
    // }, [isLoading]);

    
    // function simulateNetworkRequest() {
    //     return new Promise((resolve) => setTimeout(resolve, 2000));
    //   }

    // const handleClick = () => setLoading(true);
    return (
        
        <Login>
            <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasic">
                    <Form.Label>Nombres y Apellidos</Form.Label>
                    <Form.Control 
                    type="name" 
                    name="name"
                    onChange={onChangeData}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    onChange={onChangeData}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control sm="10" 
                    type="password" 
                    name="password"
                    onChange={onChangeData}/>
                </Form.Group>
                <Button 
                variant="primary" 
                type="submit" 
                block 
                size="lg"
                
                // disabled={isLoading}
                // onClick={!isLoading ? handleClick : null}
                >
                {/* {isLoading ? 'Cargando…' : 'Iniciar seccion'} */}
                Registrar
                </Button>
                </Form>
        </Login>
    )
}
export default withRouter(Registrar)