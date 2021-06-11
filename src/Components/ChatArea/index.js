// Zone d'affichage des messages
import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from '../Messages/UserMessage'

export class ChatArea extends React.Component {
  constructor(props){
    super(props)
    this.state = {messages : [...props.messages]}
  }

  renderMessages(){
    const messages = this.state.messages.map((message, i ) => <UserMessage value={message} name="visiteur" key={i} />)
    return [...messages]
  }
  
  render() {
    return (
    <div className="chatArea">
      <TypingNotificator />
      {this.renderMessages()}

    </div>)
    
  }
}

export default ChatArea;
