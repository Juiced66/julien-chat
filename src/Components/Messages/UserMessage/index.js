import React from "react";

class UserMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
            name : props.name
        }
    }
  
    render() {
    return (
        <div className="msgUser">
            <div className="label">{this.state.name}</div>
            {this.state.msg}
        </div>
    );
  }
}

export default UserMessage;
