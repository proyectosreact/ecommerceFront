import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './views/Home';
import Category from './views/Category';
import Product from './views/Product';
import AdminCategory from './views/AdminCategory';
import Pedidos from './views/Pedidos'
import Ingresar from './views/Ingresar' 
import Registrar from './views/Registrar'


function App() {
  return (
      <Router>
        <Switch>

          <Route exact path="/"><Home ></Home></Route>
          <Route exact path="/category/:id"><Category></Category></Route>
          <Route path="/adminCategory"><AdminCategory></AdminCategory></Route>
          <Route path="/product"> <Product></Product> </Route>
          <Route path="/pedidos"> <Pedidos></Pedidos> </Route>
          <Route path="/ingresar" component={Ingresar} />
          <Route path="/registrar" component={Registrar} />
          <Route path="/pedidos"> <Pedidos></Pedidos> </Route>
        </Switch>
      </Router>


  );
}

export default App;
