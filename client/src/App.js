import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
// import LogIn from "./pages/LogIn";
import "./App.css";

require('dotenv').config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
