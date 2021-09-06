import React from "react";
import zChat from "../../vendors/web-sdk";

class ModaleEmail extends React.Component {

  handleChatTranscripion = () =>{
    const email = document.querySelector(".emailAdress").value;
    if (zChat.EMAIL_REGEX.test(email)){
        console.log('email envoyé')
        zChat.sendEmailTranscript(email, (err) => console.log(err));
        document.querySelector(".emailModale").classList.remove("open");
    }
  }

  render() {
    return (    
    <div className="emailModale">
        <div className="text"> Recevoir l'historique du chat par mail : </div>
        
        <div type="email" name="emailModale" id="emailModale">
            <div className="label">Adresse email</div>
            <input className ="emailAdress"type="email" name="" id=""/>
        </div>
        <div className="submit" onClick={this.handleChatTranscripion}>
            Recevoir
        </div>
    </div>
    )
  }
}



export default ModaleEmail  ;