import React, {Component} from "react";
import Header from "../Header";
import ChatArea from "../ChatArea";
import IdleStatus from "../IdleStatus";
import zChat from "../../vendors/web-sdk";

export class App extends Component {

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
