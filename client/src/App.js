import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home"
import "./App.css";

require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/search" component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
