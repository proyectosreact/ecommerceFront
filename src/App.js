import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'
import Category from './views/Category'

function App() {
  return (
<<<<<<< HEAD
    <div>
      <h1>Paulo</h1>
      {/* la dependencia de react-boostrap ya esta instalada  */}
    </div>
=======

      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/category"><Category></Category></Route>
        </Switch>
      </Router>

>>>>>>> origin/develop
  );
}

export default App;
