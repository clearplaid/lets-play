import React from "react";
import Chatkit from '@pusher/chatkit-client';
import RoomList from "./RoomList";
import MessageList from "./MessageList";
import NewRoomForm from "./NewRoomForm";
import SendMessageForm from "./SendMessageForm";
require("dotenv").config();

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
      
            <div className="personal-chat">
              {/* input chatroom info for messaging */}
              <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
              <MessageList messages={this.state.messages} />
              <SendMessageForm sendMessage={this.sendMessage} />
              <NewRoomForm />
            </div>
    )
  }
          
}

export default Profile;