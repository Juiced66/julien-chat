import React from "react";

class Header extends React.Component {
  
  handleClick = (e) => {
    
    document.querySelector(".app").classList.toggle("reduced");
    
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
      </header>
    );
  }
}

export default Header;
