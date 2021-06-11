import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ChatArea from "../ChatArea";





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

const sendMessages = () => {
  //envoyer les messages du User

}

let isTyping = false //evenement envoyé par Zendesk 





  return (
    <div className="container">
      <div className="app">
        <Header />
        <ChatArea messages={getMessages()} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
