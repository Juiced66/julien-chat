import React, {Component} from "react";
import Header from "../Header";
import ChatArea from "../ChatArea";
import zChat from "../../vendors/web-sdk";
import dotenv from 'dotenv'


dotenv.config()


 function connectZendesk(){
    //Connection au ticket de l'user 
     zChat.init({
      account_key : 'wug0jwSbeWxiSqkZMOkhTGFCy9CYHbBH',
      suppress_console_error : true,
    })
  
    // Si vide création
    //si non vide getMessages()
  }
  connectZendesk()

  

export class App extends Component {


  
  
  render(){
    return (
      <div className="container">
        <div className="app">
          <Header />
          <ChatArea />
          
        </div>
      </div>
    );
  }
}

export default App;
