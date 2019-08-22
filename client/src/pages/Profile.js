import React from "react";
// import ChatScreen from '../components/Chat/ChatScreen';
// import API from "../utils/API";
import "./Profile.css";
require("dotenv").config();

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      username: ''
      // username: localStorage.getItem("username", userObject)
    }
    
  }

  // componentDidMount() {
  //   const currentUser = this.state.username
  //   console.log(currentUser)
    
  //     API.getUserData()
  //       .then(
  //         (response) => {
  //           console.log("response")
  //           console.log(response.data)
  //           this.setState({ userLoggedIn: response.data })
  //         }
  //       )
    
  //   }
    

  render() {
    
    return (
      <main>
        <h2 className="profileTitle"><strong>Profile</strong></h2>
        <div className="row m-2">
          <div className="col-sm-3 m-2">
            <img src="https://i.pinimg.com/originals/7c/dd/cd/7cddcd3c2bf739f5e3de97bdf53be5ad.jpg" className="avatar img-thumbnail" alt="avatar"></img>
            <ul className="m-2 p-5">
              <li>Shannon Johnson</li>
              <li>clearplaid</li>
              <li>clearplaid@gmail.com</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <div className="registered-guilds">
              <h4>Guilds</h4>
              {/* guilds belong to here  */}
              
            </div>
          </div>
          <div className="col-sm-2">
            <div className="owned-games">
              <h4>Owned</h4>
              {/* owned games here  */}
              <ul>
                
              </ul>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="wishlist">
              <h4>Wishlist</h4>
              {/* wishlist here  */}
            </div>
          </div>
          <div className="col-sm-2">
            <div className="friendslist">
              <h4>Friends</h4>
              {/* friends here  */}
            </div>
          </div>
          </div>
      </main>
    )
  }

}

export default Profile;