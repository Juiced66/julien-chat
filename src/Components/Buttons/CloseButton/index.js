import React from "react";
import zChat from "../../../vendors/web-sdk";
import{clearMessages} from '../../../features/messages/messagesSlice'
import { connect } from "react-redux";

class CloseButton extends React.Component {

  handleClick = () => {
    document.querySelector(".app").classList.add("hidden");
    document.querySelector(".idleStatus").classList.remove("hidden");
    zChat.endChat();
    this.props.clearMessages();
    
  }

  render() {
    return <span onClick={this.handleClick}>❌</span>;
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});

export default connect(mapStateToProps,{clearMessages})(CloseButton)  ;
