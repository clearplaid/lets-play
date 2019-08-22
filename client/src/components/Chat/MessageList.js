import React from 'react'
// import ReactDOM from 'react-dom'
import Message from './Message'

class MessageList extends React.Component {
//     listRef = null;

//     getSnapshotBeforeUpdate(prevProps, prevState) {
//         // Are we adding new items to the list?
//         // Capture the scroll position so we can adjust scroll later.
//         if (prevProps.list.length < this.props.list.length) {
//           return (
//             this.listRef.scrollHeight - this.listRef.scrollTop
//           );
//         }
//         return null;
//       }
    
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//         this.listRef.scrollTop =
//         this.listRef.scrollHeight - snapshot;
//     }
//   }
    
    render() {
        console.log(this.props.messages)
        if (!this.props.roomId) {
            return (
                <div className="message-list col-8">
                    <div className="join-room">
                        &larr; Your Journey Awaits...
                    </div>
                </div>
            )
        }
        return (
            <div ref={this.setListRef} className="message-list col-8">
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={message.id} username={message.senderId} text={message.text} />
                    )
                })}
            </div>
        )
    }
    // setListRef = ref => {
    //     this.listRef = ref;
    //   };
}

export default MessageList