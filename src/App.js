import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'
import Category from './views/Category'
import Product from './views/Product'

function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/category"><Category></Category></Route>
          <Route path="/Product"> <Product></Product> </Route>
        </Switch>
      </Router>

  );
}

export default App;
