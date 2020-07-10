import React from 'react'
import {Container} from "react-bootstrap";
import Input1 from './Input1'
import "../../assets/css/Filter.css";

const Filtrar = () => {
    const input01 ={
        title : 'Moda mujeres',
        stitle1: 'Zapatillas',
        stitle2: 'Polos',
        stitle3: 'Buzos',
        stitle4: 'Sudaderas',
    }
    const input02 ={
        title : 'Moda hombres',
        stitle1: 'Zapatillas',
        stitle2: 'Polos',
        stitle3: 'Buzos',
        stitle4: 'Sudaderas',
    }
    const input03 ={
        title : 'Accesorios',
        stitle1: 'Relojes',
        stitle2: 'Pulseras',
        stitle3: 'Ligas',
        stitle4: 'Guantes',
    }

    return (
        <Container className="filtrar">
            <Input1 input1={input01}/>
            <Input1 input1={input02}/>
            <Input1 input1={input03}/>
        </Container>
    )
}

export default Filtrar
