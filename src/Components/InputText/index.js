import React from 'react';
// import {SendButton} from '../Buttons/SendButton'


export class InputText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Saisissez votre message'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      this.setState({value: e.target.value}); 
    }
  
    handleSubmit(e) {
    //TODO : Envoyer le message de l'user
     e.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <textarea className="inputText" type="text" value={this.state.value} onChange={this.handleChange} />
            {/* <SendButton /> */}
        </form>
      );
    }
  }

  export default InputText