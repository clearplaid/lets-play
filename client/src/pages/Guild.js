import React from "react";
import ChatScreen from "../components/Chat/ChatScreen"
import "./Guild.css";

class Guild extends React.Component {

  render() {
    return (
      <main>
        <h2 className="guildTitle"><strong>Guild</strong></h2>
          <div>
            <ChatScreen ></ChatScreen>
          </div>
      </main>
    )
  }

}

export default Guild;