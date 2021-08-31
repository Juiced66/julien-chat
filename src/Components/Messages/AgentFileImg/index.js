import React from "react";

class AgentFileImg extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
            name : props.name,
            fileName : props.fileName,
            url : props.url,
        } 
    }
  
    render() {
    return (
        <div className="msgAgent">
            <div className="label">{this.state.name}</div>
            <img className="mini floatLeft" src = {this.state.url} alt={this.state.fileName}/>
            {this.state.msg}
        </div>
    );
  }
}

export default AgentFileImg;