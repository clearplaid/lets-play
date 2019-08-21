import React from "react";
import ChatScreen from '../components/Chat/ChatScreen';
// import API from "../utils/API";
import "./Profile.css";
require("dotenv").config();

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userLoggedIn: {}
      // username: localStorage.getItem("username", userObject)
    }
    
  }

  // componentDidMount() {
  //   API.getUserData()
  //     .then(
  //       (response) => {
  //         console.log("response")
  //         console.log(response.data)
  //         this.setState({ userLoggedIn: response.data })
  //     }
  // )
  //   }
    

  render() {
    
    return (
      <main>
        <h2 className="profileTitle"><strong>Profile</strong></h2>
        <div className="row">
          <div className="col-4">
            <img href="#" className="avatar" alt="avatar"></img>
            <ul>
              <li>Name</li>
              <li>Username</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="col-5">
            <div className="personal-chat">
              <h4>Messages</h4>
              {/* input chatroom info for messaging */}
              <ChatScreen messages={this.state.messages} />
            </div>
          </div>
          <div className="col-3">
            <div className="personal-chat">
              <h4>Guilds</h4>
              {/* guilds belong to here  */}
              
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="owned-games">
              <h4>Owned</h4>
              {/* owned games here  */}
              <ul>
                
              </ul>
            </div>
          </div>
          <div className="col-4">
            <div className="wishlist">
              <h4>Wishlist</h4>
              {/* wishlist here  */}
            </div>
          </div>
          <div className="col-4">
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