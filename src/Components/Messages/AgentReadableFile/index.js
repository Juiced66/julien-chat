import React from "react";

class AgentReadableFile extends React.Component {
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
            {this.state.msg} <br/> <br/>
            
            <a href={this.state.url} download={this.state.fileName}>Cliquez ici</a> pour telecharger le fichier
        </div>
    );
  }
}

export default AgentReadableFile;