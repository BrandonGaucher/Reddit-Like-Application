import React, { useMemo, useState } from "react";
//pages
import Home from "../pages/Home";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import AdminUsers from "../pages/AdminUsers";
import AdminPosts from "../pages/AdminPosts";
import Category from "../pages/Category";

//components

import Footer from "../components/Footer";
import Login from "../pages/Login";

import CreatePost from "../pages/CreatePost";
import { UserContext } from "../components/UserContext";
//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState("Guest");
  const usernameProvider = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className='App'>
      <Router>
        <UserContext.Provider value={usernameProvider}>
          <Footer />
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
            <Route path='/admin' exact>
              <AdminUsers />
            </Route>
            <Route path='/admin/posts' exact>
              <AdminPosts />
            </Route>
            <Route path='/profile' exact>
            <Profile />
            </Route>
            <Route path='/category/:id' component={Category} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
