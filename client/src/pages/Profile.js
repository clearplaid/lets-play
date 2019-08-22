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
        <div className="row justify-content-around mr-1 ml-1">
          <div className="card member-profile mb-3">
            <img src="https://i.pinimg.com/originals/7c/dd/cd/7cddcd3c2bf739f5e3de97bdf53be5ad.jpg" className="card-img-top avatar p-0" alt="avatar"></img>
            <div className="card-body member-info"> 
              <ul className="profile-info p-2">
                <li>Shannon Johnson</li>
                <li>clearplaid</li>
                <li>clearplaid@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header topic">
              <h4>Owned</h4>
              </div>
            {/* owned games here  */}
            <div className="card-body topic-lists">
              <ul className="p-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header topic">
              <h4>Wishlist</h4>
              </div>
              {/* wishlist here  */}
            <div className="card-body topic-lists">  
            <ul className="p-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header topic">
              <h4>Meeples</h4>
              </div>
            {/* friends here  */}
            <div className="card-body topic-lists"> 
              <ul className="p-2">
                <li>dungeonMaster</li>
                <li>dragonSlayer</li>
                <li>sheeple</li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header topic">
              <h4>Guilds</h4>
              </div>
            {/* guilds belong to here  */}
            <div className="card-body topic-lists">
              <ul className="p-2">
                <li>Random</li>
                <li>King of Tokyo</li>
                <li>Dungeon</li>
                <li>Meeple City</li>
              </ul>
              
            </div>
          </div>

          </div>
      </main>
    )
  }

}

export default Profile;