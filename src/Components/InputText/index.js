import React from "react";
import zChat from "../../vendors/web-sdk";

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
  }

  handleSubmit(e) {
    if(document.querySelector(".inputText").value.trim() === '') return

    const message = document.querySelector(".inputText").value;

    zChat.sendChatMsg(message, function (err) {
      if (err) {
        console.log(err);
      }
    });

    const storedMessage = {
      nick : 'visitor',
      msg : message
    }

    e.preventDefault()
    this.props.handleUserMsg(storedMessage)
    this.setState({ value: "" });
  }
  handleKeyPress(e){
    
    if(e.key === 'Enter'){
      this.handleSubmit(e)
    }
  }

  handleCLick(e) {
    e.target.value=''
    e.target.value.trim()
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
            onKeyDown={this.handleKeyPress}
          />
          <button type="button"  onClick={this.handleSubmit}>Send</button>
        </form>
      </footer>
    );
  }
}

export default InputText;
