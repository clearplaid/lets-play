import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Guild from "./pages/Guild";
import Home from "./pages/Home";
import Signup from "./components/Signup";
// import LogIn from "./pages/LogIn";
// style
import "./App.css";

require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/guild" component={Guild} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
