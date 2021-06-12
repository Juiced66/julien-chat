import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ChatArea from "../ChatArea";
import InputText from "../InputText";
import SendButton from "../Buttons/SendButton";
import zChat from "../../vendors/web-sdk";





function App() {

const connectTicket = () => {
  //Connection au ticket de l'user 
  // Si vide création
  //si non vide getMessages()
}

const getMessages = () => {
  //Recuperer les messages du ticket
    return ['salut','me gusta bravas']
}

const sendMessages = (message) => {
  zChat.sendChatMsg(message, err => {
  console.log(err)
})

}

let isTyping = false //evenement envoyé par Zendesk 





  return (
    <div className="container">
      <div className="app">
        <Header />
        <ChatArea messages={getMessages()} />
        <Footer >
          <InputText >
            <SendButton />
          </InputText >

        </Footer>
      </div>
    </div>
  );
}

export default App;
