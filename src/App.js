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


      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/category"><Category></Category></Route>
        </Switch>
      </Router>


  );
}

export default App;
