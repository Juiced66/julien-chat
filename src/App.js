import './App.css';
import React, {Component} from "react";
import Header from "./Components/Header";
import ChatArea from "./Components/ChatArea";
import IdleStatus from "./Components/IdleStatus";
import zChat from "./vendors/web-sdk";

class App extends Component {

  componentDidMount(){
    zChat.init({
      account_key: 'yBsDkMbwWtUaAOdP3ygefGPX12rOXMol',
    });
  }

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