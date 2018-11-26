import React, { Component } from 'react';

import { Container, Fa } from 'mdbreact';

import './style.css';

class OrderList extends Component {
  render() {
    const { history } = this.props;

    const ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    const crust = localStorage.getItem('crust') || '';

    return (
      <div className="orderlist">
        <Container>
          <h2
            className="h1-responsive font-weight-bold my-5 text-center"
            style={{ color: 'firebrick' }}
          >
            <Fa icon="cutlery" className="pr-2" />
            Final Order Details
          </h2>
        </Container>
        <div className="orderlist-bar">
          <h1>crust: {crust}</h1>
        </div>
        >
        <ul className="orderlist-bar">
          {ingredients.map((el, i) => (
            <li
              key={i}
              className="orderlist-elems"
              style={{ backgroundColor: 'darksalmon' }}
            >
              {el.description}
            </li>
          ))}
        </ul>
        <h2
          className="h1-responsive font-weight-bold my-5 text-center"
          style={{ color: 'firebrick' }}
        >
          PRICE {ingredients.length * 0.5} $
        </h2>
        <div className="orderlist-bar">
          <button
            className="btn peach-gradient"
            style={{ fontSize: '1em', color: 'midnightblue' }}
            onClick={() => history.push('/topping')}
          >
            Edit Order
          </button>
        </div>
      </div>
    );
  }
}

export default OrderList;
