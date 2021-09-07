import React from "react";
import zChat from "../../vendors/web-sdk";

class ModaleLogin extends React.Component {

  handleRegister = () => {
    const email = document.querySelector('#emailLogin').value
    const password = document.querySelector('#password').value
    const username = document.querySelector('#username').value

    const myHeaders = new Headers({
        'Content-Type': 'application/json',

    });
    const options = {
        method: 'POST',
        headers: myHeaders,
        body:{
            username: username,
            email : email,
            password : password
        },
        mode: 'no-cors',
    };
    
    let response = fetch("http://localhost:5000/user/signup", options);

    if(response.token !== undefined && response.message === undefined){
        this.handleLogin();
        return
    }
    alert(response.message)
  }

  handleLogin = () =>{


    // const myHeaders = new Headers({
    //     'Content-Type': 'application/json',
    // });
    // const options = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body:JSON.stringify({
    //         email : email,
    //         password : password
    //     }),
    //     mode: "no-cors",
        
    // };

    (async () => {
        const email = document.querySelector('#emailLogin').value
        const password = document.querySelector('#password').value
        const rawResponse = await fetch('http://localhost:5000/user/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            email : email,
            password : password
        }),
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();

    // if(response.token !== undefined && response.message === undefined){
    //     this.handleSessionStorage(response.token);
    //     this.handleZendeskAuth(response.token);
    //     return
    //}
    //else alert(response.message)
  }

  handleSessionStorage = (token) => window.sessionStorage.set('token',token)
    
  

  handleZendeskAuth = (token) =>{
    zChat.endChat();
    zChat.init({
        account_key: 'yBsDkMbwWtUaAOdP3ygefGPX12rOXMol',
        authentication: {
            jwt_fn: token 
            }
    });
    document.querySelector('.loginModale').classList.add('hidden');
  }

  render() {
    return (    
    <div className="loginModale hidden">

        <label htmlFor="emailLogin">Email</label>
        <input type="text" id="emailLogin" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password" />
        <label htmlFor="username">Nom d'utilisateur (seulement pour l'inscription)</label>
        <input type="text" id="username" />
        <div className="btnConnect" onClick={this.handleLogin}>Se connecter</div>
        <div className="btnSignup" onClick={this.handleRegister}>S'enregistrer</div>

    </div>
    )
  }
}



export default ModaleLogin  ;