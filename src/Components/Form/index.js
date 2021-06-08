import React from 'react';
import {SendButton} from '../Buttons/SendButton'


class ChatInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value}); 
    }
  
    handleSubmit(event) {
    //TODO : Envoyer le message de l'user
     event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <SendButton />
        </form>
      );
    }
  }