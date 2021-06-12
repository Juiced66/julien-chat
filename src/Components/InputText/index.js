import React from "react";
import zChat from "../../vendors/web-sdk";

export class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Saisissez votre message" };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    const message = document.querySelector(".inputText").value;

    zChat.sendChatMsg(message, function (err) {
      if (err) {
        console.log(err);
      }
    });
    e.preventDefault();
    this.props.handleUserMsg(message)
    this.setState({ value: "" });
  }

  handleCLick(e) {
    e.target.select();
    e.preventDefault();
  }

  render() {
    return (
      <footer>
        <form>
          <textarea
            className="inputText"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onClick={this.handleCLick}
          />
          <button type="button" onClick={this.handleSubmit}></button>
        </form>
      </footer>
    );
  }
}

export default InputText;
