import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from "../Messages/UserMessage";
import AgentMessage from "../Messages/AgentMessage";
import LogMessage from "../Messages/LogMessage";
import zChat from "../../vendors/web-sdk";
import InputText from "../InputText";

let messages = [];
let zChatInit = false;
if (zChatInit === false) {
  zChat.init({
    account_key: "wug0jwSbeWxiSqkZMOkhTGFCy9CYHbBH",
  });
  zChatInit = true;
}

export class ChatArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };

    this.handleIsTyping = this.handleIsTyping.bind(this);
    this.handleAPIChat = this.handleAPIChat.bind(this);
    this.handleUserMsg = this.handleUserMsg.bind(this);

    window.helloComponent = this;

    zChat.on("chat", function (event_data) {
      console.log(event_data);
      switch (event_data.type) {
        case "chat.msg":
          if (
            event_data.timestamp !== messages[messages.length - 1].timestamp
          ) {
            window.helloComponent.handleAPIChat(event_data);
          }
          break;
        case "chat.memberjoin":
          if (
            event_data.timestamp !== messages[messages.length - 1].timestamp
          ) {
            let regex = /^agent/i;
            if (regex.test(event_data.nick)) {
              window.helloComponent.handleAPIChat(event_data);
            }
          }
          break;
 
        case "typing":
          if (event_data.typing === true) {
            document.querySelector(".isTypingBox").classList.remove("hidden");
          } else if (event_data.typing === false) {
            document.querySelector(".isTypingBox").classList.add("hidden");
          }
          break;
        default:
          break;
      }
    });
  }

  handleAPIChat(e) {
    messages.push(e);
    this.setState({ toggle: !this.toggle });
  }
  handleIsTyping(e) {
    this.setState({ typing: e.typing });
    if (e.typing === true) {
      document.querySelector(".isTypingBox").classList.remove("hidden");
    } else document.querySelector(".isTypingBox").classList.add("hidden");
  }

  handleUserMsg(e) {
    this.setState({ toggle: !this.toggle });
    messages.push(e);
  }

  render() {
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

      if (message.type === "chat.queue_position") {
        return (
          <LogMessage
            msg={"Position dans la queue : " + message.queue_position}
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
