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
function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/category"><Category></Category></Route>
          <Route path="/admincategory"><AdminCategory></AdminCategory> </Route>
          <Route path="/product"> <Product></Product> </Route>
          <Route path="/pedidos"> <Pedidos></Pedidos> </Route>
        </Switch>
      </Router>

  );
}

export default App;
