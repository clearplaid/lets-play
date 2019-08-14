import React, { Component } from 'react';
import API from "../../utils/API";


import "./style.css";

class Signup extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      userImage: '',
      email: '',
      password: '',
      }
  }
  
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}
  
handleSubmit = event => {
  console.log('sign-up handleSubmit, username: ')
  console.log(this.state.username)
  event.preventDefault()

  const user = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    userImage: this.props.userImage,
    email: this.props.email,
    username: this.props.username,
    password: this.props.password
    }

  //request to server to add a new username/password
  API.userSignup(user)
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('successful signup')
        this.setState({ //redirect to login page
          redirectTo: '/login'
        })
      } else {
        console.log('username already taken')
      }
    }).catch(error => {
      console.log('signup error: ')
      console.log(error)

    })
}


render() {
  return (
    <div className="signupForm d-flex flex-column">
      <h4>Become an Adventurer</h4>
      <form method="/api/users" action="POST">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text"
                    className="input"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    form="signupForm"
                    value={this.state.firstName}
                    onChange={this.handleChange}/>
            </div>
            <div className="form-group col-md-6">
              <input type="text"
                    className="input"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    form="signupForm"
                    value={this.state.lastName}
                    onChange={this.handleChange}/>
            </div>
          </div>
            
          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="text"
                    className="input"
                    name="username"
                    id="username"
                    placeholder="Username"
                    form="signupForm"
                    value={this.state.username}
                    onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-6">
              <input type="url"
                    className="input"
                    name="userImage"
                    id="userImage"
                    placeholder="Image URL"
                    form="signupForm"
                    value={this.state.userImage}
                    onChange={this.handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <input type="email"
                    className="input"
                    name="email"
                    id="email"
                    form="signupForm"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-6">
              <input type="password"
                    className="input"
                    name="password"
                    id="password"
                    form="signupForm"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange} />
            </div>
          </div>

          <button
            className="btn btn-block"
            onClick={this.handleSubmit}
            type="submit"
          >Your Next Game Awaits</button>
       
      </form>
    </div>

  )
}
}

export default Signup;
