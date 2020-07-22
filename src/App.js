import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './views/Home'
import Category from './views/Category';
import AdminCategory from './views/AdminCategory';
import Contact from './views/contactenos';



function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/category"><Category></Category></Route>
        <Route path="/admincategory"><AdminCategory></AdminCategory> </Route>
        <Route path="/contactenos"><Contact></Contact> </Route>

      </Switch>
    </Router>
  );
}

export default App;
