import React, { Component } from 'react';

import '../../App.css';
import pizza from '../../pizzalogo.png';

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.Button = this.Button.bind(this);
  }

  Button() {
    return (
      <button
        type="button"
        onClick={() => {
          this.props.history.push('/crust');
        }}
        className="btn peach-gradient"
        style={{ fontSize: '.8em', color: 'midnightblue' }}
      >
        Make Pizza
      </button>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pizza} className="App-logo" alt="logo" />
          <p className="Welcome-text">Welcome to CodeEp Pizza</p>
          <this.Button />
        </header>
      </div>
    );
  }
}

export default Welcome;
