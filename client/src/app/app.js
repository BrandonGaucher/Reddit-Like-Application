import React from 'react';
//pages
import Home from '../pages/Home'
import Register from '../pages/Register'
//components
import Nav from '../components/nav';

//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          </Switch>
    </Router>
    </div>
  );
}

export default App;