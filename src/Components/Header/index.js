import React from "react";
import ReduceButton from '../Buttons/ReduceButton'
import CloseButton from '../Buttons/CloseButton'

class Header extends React.Component {

  constructor(props) {

    super(props);

    this.handleClick.bind(this);
    
  }

  handleClick(e) {

    if (e.target.classList.contains('btn'))
    return
    
    document.querySelector(".app").classList.remove("reduced");
    
  }

  render() {
    return (
      <header onClick={this.handleClick}>
        <div className="agentPic1"></div>
        <div className="agentPic2"></div>
        <div className="agentPic3"></div>
        <div className="agentName">
          Subaru Connect'
        </div>
        <ReduceButton />
        <CloseButton />
      </header>
    );
  }
}

export default Header;
