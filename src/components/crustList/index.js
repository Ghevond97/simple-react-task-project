import React, { Component } from 'react';

import { Animation, Fa } from 'mdbreact';

import './styles.css';

class Crust extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crust: ''
    };

    this.onSelectThin = this.onSelectThin.bind(this);
    this.onSelectThick = this.onSelectThick.bind(this);
    this.ButtonThin = this.ButtonThin.bind(this);
    this.ButtonThick = this.ButtonThick.bind(this);
  }

  onSelectThin() {
    this.setState(() => ({
      crust: 'Thin'
    }));
  }

  onSelectThick() {
    this.setState(() => ({
      crust: 'Thick'
    }));
  }

  ButtonThin() {
    return (
      <button
        type="button"
        onClick={() => {
          this.onSelectThin();
          setTimeout(() => this.props.history.push('/topping'), 0);
        }}
        className="btn peach-gradient"
        style={{ fontSize: '1em', color: 'midnightblue' }}
      >
        Select
      </button>
    );
  }

  ButtonThick() {
    return (
      <button
        type="button"
        onClick={() => {
          this.onSelectThick();
          setTimeout(() => this.props.history.push('/topping'), 0);
        }}
        className="btn peach-gradient"
        style={{ fontSize: '1em', color: 'midnightblue' }}
      >
        Select
      </button>
    );
  }
  render() {
    const { crust } = this.state;
    
    localStorage.setItem('crust', crust);

    return (
      <Animation type="slideInUp">
        <div className="a">
          <p className="h1">
            {' '}
            <Fa icon="cutlery" className="pr-2" />
            Choose the crust thickness
          </p>

          <div className="div">
            <ul className="cards">
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--thin" />
                  <div className="card__content">
                    <div className="card__title">Thin Crust</div>
                    <p className="card__text">
                      Thin crust, not your typical Tashir pizza crust, if you
                      choose anything else but this, you might aswell want to
                      close this page right now
                    </p>
                    <this.ButtonThin />
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--thick" />
                  <div className="card__content">
                    <div className="card__title">Thic Crust</div>
                    <p className="card__text">
                      Don't call yourself a pizza lover if you choose thick
                      crust over thin crust
                    </p>
                    <this.ButtonThick />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Animation>
    );
  }
}

export default Crust;
