import React from "react";
import zChat from "../../vendors/web-sdk";
import paperPlane from "../../img/2.png";

export class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Saisissez votre message" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    zChat.sendTyping(true);
  }

  handleSubmit(e) {
    if (document.querySelector(".inputText").value.trim() === "") return;

    const message = document.querySelector(".inputText").value;

    zChat.sendChatMsg(message, function (err) {
      if (err) {
        console.log(err);
      }
    });

    const storedMessage = {
      nick: "visitor",
      msg: message,
    };

    e.preventDefault();
    this.props.handleUserMsg(storedMessage);
    this.setState({ value: "" });
    zChat.sendTyping(false);
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  handleCLick(e) {
    e.target.value = "";
    e.target.value.trim();
    e.preventDefault();
  }

  render() {
    return (
      <footer>
        <div className="textAreaBox">
          <textarea
            className="inputText"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onClick={this.handleCLick}
            onKeyDown={this.handleKeyPress}
          />
        </div>
        <div className="paperPlaneBox" onClick={this.handleSubmit}>
          <img className="paperPlane" src={paperPlane} />
        </div>
      </footer>
    );
  }
}

export default InputText;
