import React from "react";
//pages
import Home from "../pages/Home";
import Register from "../pages/Register";
//components
import Nav from "../components/nav";
import Login from "../pages/Login";
import CreatePost from "../pages/CreatePost";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/register' exact>
            <Register />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/createpost' exact>
            <CreatePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
