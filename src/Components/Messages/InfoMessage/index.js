import React from "react";
import {connect} from "react-redux";
import {sendRating} from "../../../features/messages/messagesSlice"
import  zChat  from "../../../vendors/web-sdk";

class InfoMessage extends React.Component {

    handleRating = (e) => {
        console.log(e)
        const msgEnd = e.target.innerText === "👍" ? "positive" : "negative"
        this.props.sendRating({
                    value : "Votre évaluation est " + msgEnd,
                    timestamp : Date.now(),
                    messageType : msgEnd + "Rate"
                })
        if(msgEnd === "positive")        
            zChat.sendChatRating('good', err => console.log(err));
        else  zChat.sendChatRating('bad',err => console.log(err));
    }

    render() {
        console.log(this.props)
        switch (this.props.name) {
            case "Fichier envoyé":
                return (
                    <div className="msgInfo">
                        <div className="label">{this.props.name}</div>
                        {this.props.msg}
                    </div>
                );
            case "Information" :

                return (
                    <div className="msgInfo">
                        <div className="label">{this.props.name}</div>
                        {this.props.msg}
                        <div className ="btnRatingContainer">
                            <div onClick={this.handleRating}>👍</div>
                            <div onClick={this.handleRating}>👎</div>
                        </div>
                    </div>
                );
        
            default:
                break;
        }
  }
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
  });
  export default connect(mapStateToProps, {
   sendRating,
  })(InfoMessage);