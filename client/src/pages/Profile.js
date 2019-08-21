import React from "react";
import Chatkit from '@pusher/chatkit-client';
import "./Profile.css";
import RoomList from "../components/Chat/RoomList";
import MessageList from "../components/Chat/MessageList";
import NewRoomForm from "../components/Chat/NewRoomForm";
import SendMessageForm from "../components/Chat/SendMessageForm";
require("dotenv").config();


// import API from "../utils/API";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      roomId: '',
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      // username: localStorage.getItem("username", userObject)
    }
    
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: "v1:us1:d763a976-7d94-4bf1-ab82-e3998634540e",
        userId: 'shannon',
        tokenProvider: new Chatkit.TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d763a976-7d94-4bf1-ab82-e3998634540e/token"
        })
    })
    
    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms()
      })
      .catch(err => console.log('error on connecting: ', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
    .then(joinableRooms => {
        this.setState({
            joinableRooms,
            joinedRooms: this.currentUser.rooms
        })
    })
    .catch(err => console.log('error on joinableRooms: ', err))
}

  subscribeToRoom(roomId) {
    this.setState({ messages: [] })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      messageLimit: 100,
      hooks: {
          onNewMessage: message => {
              this.setState({
                  messages: [...this.state.messages, message]
              })
          }
        }
    })
      .then(room => {
        this.setState({
          roomId: room.id
        })
        this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err))
}
    
  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: "25ab793b-4cc9-4ad8-ae7f-f74ca5265508"
    })
  }

  render() {
    
    return (
      <main>
        <h2 className="profileTitle"><strong>Profile</strong></h2>
        <div className="row">
          <div className="col-4">
            <img href="#" className="avatar" alt="avatar"></img>
            <ul>
              <li>Name</li>
              <li>{this.props.username}</li>
              <li>Email</li>
            </ul>
          </div>
          <div className="col-5">
            <div className="personal-chat">
              <h4>Messages</h4>
              {/* input chatroom info for messaging */}
              <MessageList messages={this.state.messages} />
              <SendMessageForm sendMessage={this.sendMessage} />
              <NewRoomForm />
            </div>
          </div>
          <div className="col-3">
            <div className="personal-chat">
              <h4>Guilds</h4>
              {/* guilds belong to here  */}
              <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="owned-games">
              <h4>Owned</h4>
              {/* owned games here  */}
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