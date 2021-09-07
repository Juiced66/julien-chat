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
    document.querySelector(".inputText").value = "Saisissez votre message"; 
  }

  render() {
    return <div className="closeBtn" title="Interrompre le chat" onClick={this.handleClick}>❌</div>;
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});

export default connect(mapStateToProps,{clearMessages})(CloseButton)  ;
