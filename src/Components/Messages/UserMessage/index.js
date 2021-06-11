import React from "react";

export class UserMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : props.value,
            name : props.name
        }
    }
  
    render() {
    return (
        <div className="msgUser">
            <div className="label">{this.state.name}</div>
            {this.state.value}
        </div>
    );
  }
}

export default UserMessage;
