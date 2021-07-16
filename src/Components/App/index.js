import React, {Component} from "react";
import Header from "../Header";
import ChatArea from "../ChatArea";
import IdleStatus from "../IdleStatus";
import dotenv from 'dotenv'


dotenv.config()

export class App extends Component {


  
  
  render(){
    return (
      <div className="container ">
        <div className="app hidden">
          <Header />
          <ChatArea />
        </div>
          <IdleStatus />
      </div>
    );
  }
}

export default App;
