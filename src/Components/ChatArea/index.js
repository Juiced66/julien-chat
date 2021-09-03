import React from "react";
import TypingNotificator from "../TypingNotificator";
import UserMessage from "../Messages/UserMessage";
import AgentMessage from "../Messages/AgentMessage";
import AgentFileImg from "../Messages/AgentFileImg";
import AgentReadableFile from "../Messages/AgentReadableFile";
import LogMessage from "../Messages/LogMessage";
import InfoMessage from "../Messages/InfoMessage";
import zChat from "../../vendors/web-sdk";
import InputText from "../InputText";
import {
  receiveAgentMessage,
  receiveYoutubeEmbed,
  registerLog,
  registerInformation,
  registerAgentFile,
} from "../../features/messages/messagesSlice";
import { connect } from "react-redux";
import AgentYoutubeOembedMessage from "../Messages/AgentYoutubeOembedMessage";

class ChatArea extends React.Component {
  componentDidMount() {
    zChat.on("chat", (event_data) => {
      console.log(event_data);
      const regex = /^agent/i;
      switch (event_data.type) {
        case "chat.msg":
          const youtubeRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w]+\?v=|embed\/|v\/)?)([\w]+)(\S+)?$/
          if(youtubeRegex.test(event_data.msg)){
            fetch('https://www.youtube.com/oembed?url=' + event_data.msg)
            .then(res =>res.json())
            .then(result => this.props.receiveYoutubeEmbed({
                name: event_data.display_name,
                timestamp : event_data.timestamp,
                videoUrl : event_data.msg,
                title : result.title,
                author : result.author_name,
                authorUrl : result.author_url,
                thumbnailUrl: result.thumbnail_url,
                thumbnailWidth : result.thumbnail_width,
                thumbnailHeight : result.thumbnail_height,
                providerName : result.provider_name,
                messageType : "agentYoutubeEmbed",
              })             
            );
        
           }else{
            this.props.receiveAgentMessage({
              name: event_data.display_name,
              timestamp: event_data.timestamp,
              value: event_data.msg,
              messageType: "agent",
            });
          }
          break;

        case "chat.queue_position":
          if (event_data.queue_position !== 0)
            this.props.registerLog({
              name: event_data.display_name,
              timestamp : event_data.timestamp,
              value: "Position dans la queue : " + event_data.queue_position,
              messageType: "queue",
            });
          break;

        case "chat.memberjoin":
          if (regex.test(event_data.nick))
            this.props.registerLog({
              name: event_data.display_name,
              timestamp: event_data.timestamp,
              value: event_data.display_name + " a rejoint le chat",
              messageType: "memberjoin",
            });
          break;

        case "chat.memberleave":
          if (regex.test(event_data.nick))
            this.props.registerLog({
              name: event_data.display_name,
              timestamp: event_data.timestamp,
              value: event_data.display_name + " a quitté le chat",
              messageType: "memberleave",
            });
          break;
        case "chat.request.rating":
          this.props.registerInformation({
            name: event_data.display_name,
            timestamp: event_data.timestamp,
            value: event_data.display_name + " à demandé de noter le chat \n",
            messageType: "requestRating",
          });
          break;
        case "chat.file":
          console.log(event_data.attachment);
          this.props.registerAgentFile({
            name: event_data.display_name,
            timestamp: event_data.timestamp,
            url: event_data.attachment.url,
            fileName: event_data.attachment.name,
            value : event_data.display_name + " vous a envoyé le fichier " + event_data.attachment.name,
            messageType: "agentFile",
          });
          console.log('chat.file');
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
            name={message.name + " de Subaru connect'"}
            key={i}
          />
        );
      if(message.messageType === "agentYoutubeEmbed")
          return <AgentYoutubeOembedMessage 
            name={message.name}
            videoUrl={message.videoUrl}
            title={message.title}
            author={message.author}
            authorUrl={message.authorUrl}
            thumbnailUrl={message.thumbnailUrl}
            thumbnailHeight={message.thumbnailHeight}
            thumbnailWidth={message.thumbnailWidth}
            key ={i}
            />
      if (message.messageType === "memberjoin")
        return <LogMessage msg={message.value} key={i} />;
      if (message.messageType === "memberleave")
        return <LogMessage msg={message.value} key={i} />;
      if (message.messageType === "requestRating")
        return <InfoMessage msg={message.value} name="Information" key={i} />;
      if (message.messageType === "visitorFile")
        return (
          <InfoMessage msg={message.value} name="Fichier envoyé" key={i} />
        );
      if (message.messageType === "positiveRate")
        return <LogMessage msg={message.value} key={i} />;
      if (message.messageType === "negativeRate")
        return <LogMessage msg={message.value} key={i} />;
      if(message.messageType === "agentFile"){
        console.log('enter');
        const regexPdf = /.pdf$/i;
        const regexTxt = /.txt$/i;
        const regexPng = /.png$/i;
        const regexGif = /.gif$/i;
        const regexJpeg = /.jpeg$/i;
        const regexJpg = /.jpg$/i;
        if(regexPdf.test(message.fileName) ||
          regexTxt.test(message.fileName)){
          return <AgentReadableFile 
            msg = {message.value}
            name = {message.name}
            fileName = {message.fileName}
            url = {message.url}
            key={i}
            />
        }
        else if (regexGif.test(message.fileName) ||
         regexPng.test(message.fileName) ||
         regexJpeg.test(message.fileName) ||
         regexJpg.test(message.fileName)){
          return <AgentFileImg 
            msg = {message.value}
            name = {message.name}
            fileName = {message.fileName}
            url = {message.url}
            key={i}
            />
        }else
        return null;
      }
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
  receiveYoutubeEmbed,
  registerLog,
  registerInformation,
  registerAgentFile,
})(ChatArea);
