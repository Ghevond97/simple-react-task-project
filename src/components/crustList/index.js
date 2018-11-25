import React, { Component } from 'react';

import { Animation } from 'mdbreact';

import './styles.css';

class Crust extends Component {
  render() {
    return (
      <Animation type="slideInUp">
        <div className="a">
          <p className="h1">Choose the crust thickness</p>

          <div className="div">
            <ul className="cards">
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--thin" />
                  <div className="card__content">
                    <div className="card__title">Thin Crust</div>
                    <p className="card__text">
                      This is the shorthand for flex-grow, flex-shrink and
                      flex-basis combined. The second and third parameters
                      (flex-shrink and flex-basis) are optional. Default is 0 1
                      auto.{' '}
                    </p>
                    <button
                      className="btn peach-gradient"
                      style={{ fontSize: '1em', color: 'midnightblue' }}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </li>
              <li className="cards__item">
                <div className="card">
                  <div className="card__image card__image--thick" />
                  <div className="card__content">
                    <div className="card__title">Thic Crust</div>
                    <p className="card__text">
                      This defines the ability for a flex item to grow if
                      necessary. It accepts a unitless value that serves as a
                      proportion. It dictates what amount of the available space
                      inside the flex container the item should take up.
                    </p>
                    <button
                      className="btn peach-gradient"
                      style={{ fontSize: '1em', color: 'midnightblue' }}
                    >
                      Select
                    </button>
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
