import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './views/Home'
import Category from './views/Category'
import Sale from './views/Sale'

function App() {
  return (

      <Router>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/category"><Category></Category></Route>
          <Route path="/sale"> <Sale></Sale></Route>
        </Switch>
      </Router>

  );
}

export default App;
