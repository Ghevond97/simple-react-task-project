import React, { Component } from "react";
import pizza from "../../pizzalogo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "../../App.css";
import Crust from "../crustList";

class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizza} className="App-logo" alt="logo" />
          <p className="Welcome-text">Welcome to CodeEp Pizza</p>
          <button className="btn peach-gradient"><Link to="/about" style = {{textDecoration:'none', color:"midnightblue", fontSize:'1.3em'}}>Make Pizza</Link></button>
        </header>
      </div>
    );
  }
}

export default Welcome;
