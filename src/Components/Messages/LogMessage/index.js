import React from "react";

class LogMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
        }  
    }
  
    render() {
    return (
        <div className="msgLog">
            {this.state.msg}
        </div>
    );
  }
}

export default LogMessage;