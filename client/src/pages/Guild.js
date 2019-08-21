import React from "react";
import ChatScreen from "../components/Chat/ChatScreen"
import "./Guild.css";

class Guild extends React.Component {
  render() {
    return (
      <main>
        <h2 className="guildTitle"><strong>Guild</strong></h2>
        <ChatScreen></ChatScreen>
      </main>
    )
  }

}

export default Guild;