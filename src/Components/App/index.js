import "../../css/App.css";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ChatArea from "../ChatArea";

function App() {
  return (
    <div className="container">
      <div className="app">
        <Header />
        <ChatArea />
        <Footer />
      </div>
    </div>
  );
}

export default App;
