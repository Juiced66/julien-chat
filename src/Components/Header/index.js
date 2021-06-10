// Header de la bulle

/**
 * < WindowControls /> (réduire la fenêtre, agrandir la fenêtre, fermer la fenêtre )
 *
 */

import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="agentPic"></div>
        <div className="agentName">
          Wilson <em>@Subaru_staff</em>
        </div>
        <span>─</span>
        <span>❌</span>
      </header>
    );
  }
}

export default Header;
