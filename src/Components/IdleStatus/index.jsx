import React, { Component } from 'react'
import closed from '../../img/closed.png'

class IdleStatus extends Component {
  
    handleClick = () => {
    
        document.querySelector(".app").classList.remove("hidden");
        document.querySelector(".idleStatus").classList.add('hidden')

      }
    
    render() {
        return (
            <div onClick={this.handleClick} >
                <img onClick={this.handleClick} className='idleStatus' src={closed} alt="Bulle de chat fermée" />
            </div>
        )
    }
}

export default IdleStatus