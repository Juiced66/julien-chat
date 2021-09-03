import React from "react";

class AgentMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
            name : props.name
        }
        
    }
    render() {
return (
        <div className="msgAgent">
            <div className="label">{this.state.name}</div>
            {this.state.msg}
        </div>
    );
  }
}

export default AgentMessage;