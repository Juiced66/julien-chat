import React, {Component} from "react";
import Header from "../Header";
import ChatArea from "../ChatArea";
import dotenv from 'dotenv'


dotenv.config()

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
