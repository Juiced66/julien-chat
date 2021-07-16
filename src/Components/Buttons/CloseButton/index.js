import React from "react";

export class CloseButton extends React.Component {

  constructor(props) {

    super(props);

    this.handleClick.bind(this);
    
  }
  
  handleClick() {

    document.querySelector(".app").classList.add("hidden");
    document.querySelector(".idleStatus").classList.remove('hidden')

  }

  render() {
    
    return (
       
       <span onClick={this.handleClick}>
           ❌
       </span>

    );

  }
}

export default CloseButton;
