import React from "react";

class ReduceButton extends React.Component {

  constructor(props) {

    super(props);

    this.handleClick.bind(this);

  }
  
  handleClick() {

    document.querySelector(".app").classList.add("reduced");

  }

  render() {

    return <span className='btn' onClick={this.handleClick}>─</span>;

  }
}

export default ReduceButton;
