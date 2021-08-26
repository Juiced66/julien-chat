import React from "react";
import ReduceButton from '../Buttons/ReduceButton'
import MaximizeButton from '../Buttons/MaximizeButton'
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
        <div className="agentPic"></div>
        <div className="agentName">
          Wilson <em>@Subaru_staff</em>
        </div>
        <MaximizeButton />
        <ReduceButton />
        <CloseButton />
      </header>
    );
  }
}

export default Header;
