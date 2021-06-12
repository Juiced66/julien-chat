import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './Components/App';
import zChat from './vendors/web-sdk'
console.log(zChat)

zChat.init({
  account_key: '0MUJdVgfCsSjkv9QaO5AdBhSOtCJ4Tj1'
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// rendu global de l'application 