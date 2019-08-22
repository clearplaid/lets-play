import React from "react";
import Chatkit from '@pusher/chatkit-client';
import RoomList from "./RoomList";
import MessageList from "./MessageList";
import NewRoomForm from "./NewRoomForm";
import SendMessageForm from "./SendMessageForm";
import "./ChatScreen.css"
require("dotenv").config();

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    
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
    this.createRoom = this.createRoom.bind(this)
  }

  componentDidMount() {

    const chatManager = new Chatkit.ChatManager({
        instanceLocator: "v1:us1:d763a976-7d94-4bf1-ab82-e3998634540e",
        userId: '5d5d5d9d61049e4e597c46ff',
        tokenProvider: new Chatkit.TokenProvider({
            url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d763a976-7d94-4bf1-ab82-e3998634540e/token"
        })
    })
    
    chatManager
      .connect()
      .then(currentUser => {
        console.log(currentUser)
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
          onMessage: message => {
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
      roomId: this.state.roomId
    })
  }

  createRoom(name) {
    this.currentUser.createRoom({
        name
    })
    .then(room => this.subscribeToRoom(room.id))
    .catch(err => console.log('error with createRoom: ', err))
}

  render() {
    
    return (
      <div className="personal-chat">
            {/* input chatroom info for messaging */}
        <div className="row justify-content-around">
          <div className="card room-card mb-3">
            <div className="card-body rooms-body">
            <RoomList
                subscribeToRoom={this.subscribeToRoom}
                rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                roomId={this.state.roomId}
              />
            </div>
            <div className="card-footer room-footer">
              <NewRoomForm createRoom={this.createRoom} />
            </div>
          </div>
          <div className="card message-card mb-3">
            <div className="card-body message-body">
              <MessageList
                roomId={this.state.roomId}
                messages={this.state.messages} />
            </div>
            <div className="card-footer message-footer">
              <SendMessageForm
                disabled={!this.state.roomId}
                sendMessage={this.sendMessage}
              />
              </div>
            </div>
        </div>
      </div>
    )
  }
          
}

export default ChatScreen;