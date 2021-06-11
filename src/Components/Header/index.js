// Header de la bulle

/**
 * < WindowControls /> (réduire la fenêtre, agrandir la fenêtre, fermer la fenêtre )
 *
 */

import React from "react";
import ReduceButton from '../Buttons/ReduceButton'
import MaximizeButton from '../Buttons/MaximizeButton'
import CloseButton from '../Buttons/CloseButton'

export class Header extends React.Component {
  render() {
    return (
      <header>
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
