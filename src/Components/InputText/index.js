import React from "react";
import zChat from "../../vendors/web-sdk";
import paperPlane from "../../img/2.png";
import fileSend from "../../img/fichier.png";
import {
  sendVisitorFile,
  sendVisitorMessage
} from "../../features/messages/messagesSlice";
import { connect } from "react-redux";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Saisissez votre message" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    zChat.sendTyping(true);
  }

  handleSubmit = (e) => {
    if (document.querySelector(".inputText").value.trim() === "") return;

    const message = document.querySelector(".inputText").value;

    this.props.sendVisitorMessage({
      name : "Visiteur",
      timestamp : Date.now(),
      value : message,
      messageType : "visitor"
    })

    zChat.sendChatMsg(message, function (err) {
      if (err) {
        console.log(err);
      }
    });

    e.preventDefault();

    this.setState({ value: "" });

    zChat.sendTyping(false);
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  handleCLick = (e) => {
    if(e.target.value === "Saisissez votre message")
    e.target.value = "";
    e.target.value.trim();
    e.preventDefault();
  }
  handleChatTranscription = () =>{
    
    document.querySelector(".emailModale").classList.toggle("open");
    
  }
  handleFileSend = (file) => {
 
    zChat.sendFile(file, (err, data) => { 
      console.log(data);
      console.log(err);
      if(err === null)
        this.props.sendVisitorFile({
          name : "Visiteur",
          timestamp : Date.now(),
          value : "Vous avez envoyé le fichier " + data.name,
          messageType : "visitorFile"
        })
      
     });

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
          <img className="paperPlane" src={paperPlane} alt="envoyer" />
        </div>
        <div className="features" >
          <label htmlFor="sendFile" title="Fichiers acceptés : .pdf .png .jpeg .txt"><img src={fileSend} alt='envoi de fichier'/></label>
          <input className="sendFile" onChange={(e) => this.handleFileSend(e.target.files[0])} type="file" id="sendFile" name="sendFile" alt="fichier" />
          <div className="more" title="Recevoir la transcription du chat par mail" onClick={this.handleChatTranscription}>📧</div>
        </div>
      </footer>
    );
  }
}
const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});
export default connect(mapStateToProps, {
 sendVisitorMessage,
 sendVisitorFile
})(InputText);
