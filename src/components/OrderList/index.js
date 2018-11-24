import React, { Component } from 'react';

import './style.css';
import { Container, Fa } from 'mdbreact';

class OrderList extends Component {
  render() {
    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    return (
      <div className="orderlist">
        <Container>
          <h2
            className="h1-responsive font-weight-bold my-5 text-center"
            style={{ color: 'firebrick' }}
          >
            <Fa icon="cutlery" className="pr-2" />
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
        </Container>
        <ul className="orderlist-bar">
          {ingredients.map((el, i) => (
            <li key={i} className="orderlist-elems">
              {el.name}
            </li>
          ))}
        </ul>
        <h2
          className="h1-responsive font-weight-bold my-5 text-center"
          style={{ color: 'firebrick' }}
        >
          {' '}
          PRICE {ingredients.length * 0.5} $
        </h2>
      </div>
    );
  }
}

export default OrderList;
