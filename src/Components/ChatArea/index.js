import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from "../Messages/UserMessage";
import zChat from "../../vendors/web-sdk";
import InputText from "../InputText";

let messages = [];

export class ChatArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.renderMessages = this.renderMessages.bind(this);
    this.handleAgentMsg = this.handleAgentMsg.bind(this);
    this.handleUserMsg = this.handleUserMsg.bind(this);
    window.helloComponent = this;
    zChat.on("chat", function (event_data) {
      console.log(event_data)
      if(event_data.type === "chat.msg"){
        if(event_data.msg !== messages[messages.length - 1]){
          window.helloComponent.handleAgentMsg(event_data.msg);
        }
    }
    });
  }

  handleAgentMsg(e) {
    messages.push(e);
    this.setState({
      toggle: !this.toggle,
    });
  }

  handleUserMsg(e) {
    this.setState({ toggle: !this.toggle });
    console.log(e);
    messages.push(e);
    console.log(messages);
  }

  renderMessages() {
    let toRender = messages.map((message, i) => (
      <UserMessage value={message} name="visiteur" key={i} />
    ));
    return (
      <div className="chatArea">
        <TypingNotificator />
        {[...toRender]}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="chatArea">
          <TypingNotificator />
          {this.renderMessages()}
        </div>
        <InputText handleUserMsg={this.handleUserMsg.bind(this)} />
      </React.Fragment>
    );
  }
}

export default ChatArea;
