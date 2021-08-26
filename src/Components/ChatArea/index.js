import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from "../Messages/UserMessage";
import AgentMessage from "../Messages/AgentMessage";
import LogMessage from "../Messages/LogMessage";
import zChat from "../../vendors/web-sdk";
import InputText from "../InputText";
import {
  receiveAgentMessage,
  registerLog,
  registerInformation,
} from "../../features/messages/messagesSlice";
import { connect } from "react-redux";

class ChatArea extends React.Component {

  componentDidMount() {
    zChat.on("chat", (event_data) => {
      console.log(event_data);
      switch (event_data.type) {
        case "chat.msg":
          this.props.receiveAgentMessage({
            name: event_data.display_name,
            timestamp: event_data.timestamp,
            value: event_data.msg,
            messageType: "agent",
          });
          break;
        case "chat.queue_position":
          if (event_data.queue_position !== 0)
            this.props.registerLog({
              name: event_data.display_name,
              timestamp: Date.now(),
              value: "Position dans la queue : " + event_data.queue_position,
              messageType: "log",
            });
          break;
        
        case "chat.memberjoin":
          const regex = /^agent/i;
          if (regex.test(event_data.nick)) {
            this.props.registerLog({
              name: event_data.display_name,
              timestamp: event_data.timestamp,
              value: event_data.display_name + " a rejoint le chat",
              messageType: "log",
            });
          }
          break;
        case "typing":
          if (event_data.typing === true)
            document.querySelector(".isTypingBox").classList.remove("hidden");
          else document.querySelector(".isTypingBox").classList.add("hidden");
          break;
        default:
          console.log("err");
          break;
      }
    });
  }

  handleIsTyping = (e) => {
    this.setState({ typing: e.typing });
    if (e.typing === true)
      document.querySelector(".isTypingBox").classList.remove("hidden");
    else document.querySelector(".isTypingBox").classList.add("hidden");
  };

  handleScrollDown() {
    document
      .querySelector(".chatArea")
      .scrollTo(0, document.querySelector(".chatArea").scrollHeight);
  }

  componentDidUpdate() {
    this.handleScrollDown();
  }

  render() {
    const messages = this.props.messages;

    return (
      <React.Fragment>
        <div className="chatArea">
          <TypingNotificator />
        </div>
        <InputText />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});

export default connect(mapStateToProps, {
  receiveAgentMessage,
  registerLog,
  registerInformation,
})(ChatArea);
