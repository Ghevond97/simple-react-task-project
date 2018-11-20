import React, { Component } from "react";
import logo from "./logo.svg";
import pizza from "./pizzalogo.png";
import { Button } from "mdbreact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizza} className="App-logo" alt="logo" />
          <p className="Welcome-text">Welcome to CodeEp Pizza</p>
          <Button rounded gradient="peach">Make Pizza</Button>
        </header>
      </div>
    );
  }
}

export default App;
