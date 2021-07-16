import React, { Component } from 'react'
import closed from '../../img/closed.png'

export class IdleStatus extends Component {

    constructor(props) {

        super(props);
    
        this.handleClick.bind(this);
        
      }
      
      handleClick() {
    
        document.querySelector(".app").classList.remove("hidden");
        document.querySelector(".idleStatus").classList.add('hidden')

      }
    
    render() {
        return (
            <div onClick={this.handleClick} >
                <img onClick={this.handleClick} className='idleStatus' src={closed} alt="" />
            </div>
        )
    }
}

export default IdleStatus