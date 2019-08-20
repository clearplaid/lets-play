import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/API";
import Axios from 'axios';
// components
import Nav from "./components/Nav/nav";
import Home from "./pages/Home";
import Signup from "./components/Signup/signup";
import Profile from "./pages/Profile";
import Guild from "./pages/Guild"
import Search from "./pages/Search";
import Footer from "./components/Footer/footer";
import LogIn from "./components/LogIn/login";
// style
import "./App.css";

require('dotenv').config();

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: '',
      userId: ''
    }
  }

  componentDidMount() {
    this.getUser()
  }
    
  getUser = () => {
    Axios.get('/user/').then(response => {
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(response.data.user)
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId: response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: '',
          userId: ''
        })
      }
    })
  }

  updateUser = userObject => {
    console.log(userObject)
    this.setState(userObject)
  }

  render() {
  console.log(this.state.userId)
  return (
    <Router>
      <div>
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logIn" render={() =>
            <LogIn updateUser={this.updateUser} />} />
          <Route exact path="/search" component={Search} />
          <Route path="/profile" render={() =>
            <Profile updateUser={this.updateUser} />} />
          <Route exact path="/guild" render={() =>
            <Guild updateUser={this.updateUser} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
}
export default App;
