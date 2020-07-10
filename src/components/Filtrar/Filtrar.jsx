import React from 'react'
import {Container} from "react-bootstrap";
import Inputs from './Inputs'
import "../../assets/css/main.css";

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
            <Inputs input={input01}/>
            <Inputs input={input02}/>
            <Inputs input={input03}/>
        </Container>
    )
}

export default Filtrar
