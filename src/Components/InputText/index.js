import React from 'react';
import SendButton from '../Buttons/SendButton'


export class InputText extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Saisissez votre message'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCLick = this.handleCLick.bind(this);
    }
  
    handleChange(e) {
      this.setState({value: e.target.value}); 
    }
  
    handleSubmit(e) {
    const message = e.target[0].innerHTML 
    console.log(message)
     e.preventDefault();
    }

    handleCLick(e){
      e.target.select()
      e.preventDefault()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <textarea className="inputText" 
              type="text" 
              value={this.state.value} 
              onChange={this.handleChange}
              onClick={this.handleCLick} 
              />
            <SendButton />
        </form>
      );
    }
  }

  export default InputText