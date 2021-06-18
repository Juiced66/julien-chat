import React from "react";

export class UserMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg : props.msg,
            name : props.name
        }
    }
  
    render() {
        console.log(this.state.msg)
    return (
        <div className="msgUser">
            <div className="label">{this.state.name}</div>
            {this.state.msg}
        </div>
    );
  }
}

export default UserMessage;
