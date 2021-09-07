import './App.scss';
import React, {Component} from "react";
import Header from "./Components/Header";
import ChatArea from "./Components/ChatArea";
import IdleStatus from "./Components/IdleStatus";
import zChat from "./vendors/web-sdk";
import ModaleEmail from './Components/ModaleEmail';

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
          <ModaleEmail/>
        </div>
          <IdleStatus />
      </div>
     
    );
  }
}

export default App;