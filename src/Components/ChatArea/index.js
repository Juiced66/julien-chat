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
              messageType: "queue",
            });
          break;

        case "chat.memberjoin":
          const regex = /^agent/i;
          if (regex.test(event_data.nick)) {
            this.props.registerLog({
              name: event_data.display_name,
              timestamp: event_data.timestamp,
              value: event_data.display_name + " a rejoint le chat",
              messageType: "memberjoin",
            });
          }
          break;
        case "typing":
          if (event_data.typing === true)
            document.querySelector(".isTypingBox").classList.remove("hidden");
          else document.querySelector(".isTypingBox").classList.add("hidden");
          break;
        default:
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
    const renderedMessages = this.props.messages.map((message, i) => {
      if (message.messageType === "information")
      return <LogMessage msg={message.value} key={i} />;
      if (message.messageType === "queue")
        return <LogMessage msg={message.value} key={i} />;
      if (message.messageType === "visitor")
        return <UserMessage msg={message.value} name={message.name} key={i} />;
      if (message.messageType === "agent")
        return (
          <AgentMessage
            msg={message.value}
            name={message.display_name}
            key={i}
          />
        );
      if (message.messageType === "memberjoin")
        return <LogMessage msg={message.value} key={i} />;

      return null;
    });
    return (
      <React.Fragment>
        <div className="chatArea">
          {[...renderedMessages]}
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
