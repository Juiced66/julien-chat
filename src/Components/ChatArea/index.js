import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from "../Messages/UserMessage";
import AgentMessage from "../Messages/AgentMessage";
import LogMessage from "../Messages/LogMessage";
import zChat from "../../vendors/web-sdk";
import InputText from "../InputText";

let messages = [];

export class ChatArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.agentRegex = /^agent/i;
    // this.renderMessages = this.renderMessages.bind(this);
    this.handleAPIChat = this.handleAPIChat.bind(this);
    this.handleUserMsg = this.handleUserMsg.bind(this);
    window.helloComponent = this;

    zChat.on("chat", function (event_data) {
      if (event_data.type === "chat.msg") {
        if (event_data.msg !== messages[messages.length - 1].msg) {
          window.helloComponent.handleAPIChat(event_data);
        }
      } else if (event_data.type === "chat.memberjoin") {
        if (event_data.timestamp !== messages[messages.length - 1].timestamp) {
          let regex = /^agent/i;
          if (regex.test(event_data.nick)) {
            window.helloComponent.handleAPIChat(event_data);
          }
        }
      }
    });
  }

  handleAPIChat(e) {
    messages.push(e);
    this.setState({
      toggle: !this.toggle,
    });
  }

  handleUserMsg(e) {
    this.setState({ toggle: !this.toggle });
    messages.push(e);
  }

  render() {
    console.log(messages);
    let toRender = messages.map((message, i) => {
      console.log(message);
      if (message.nick === "visitor") {
        console.log(message.msg);
        return <UserMessage msg={message.msg} name="visiteur" key={i} />;
      }
      let regex = /^agent/i;
      if (regex.test(message.nick) && message.type === "chat.msg") {
        return (
          <AgentMessage msg={message.msg} name={message.display_name} key={i} />
        );
      }
      if (message.type === "chat.memberjoin") {
        return (
          <LogMessage
            msg={message.display_name + " a rejoint le chat"}
            key={i}
          />
        );
      }

      return null;
    });
    return (
      <React.Fragment>
        <div className="chatArea">
          <TypingNotificator />
          {[...toRender]}
        </div>
        <InputText handleUserMsg={this.handleUserMsg.bind(this)} />
      </React.Fragment>
    );
  }
}

export default ChatArea;
