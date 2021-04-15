import React, { useMemo, useState } from "react";
//pages
import Home from "../pages/Home";
import Register from "../pages/Register";
//components
import Nav from "../components/nav";
import Login from "../pages/Login";
import CreatePost from "../pages/CreatePost";
import {UserContext} from "../components/UserContext";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("Guest");
  const usernameProvider = useMemo(() => ({user, setUser}), [user, setUser]);
  return (
    <div className='App'>
      <Router>
        <UserContext.Provider value = {usernameProvider}>
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
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
