import React, { Component } from 'react';

import { Container, Row, Col, Fa, View } from 'mdbreact';

import olives from '../../olive.png';
import sausage from '../../sausage.png';
import peppers from '../../pepper.png';
import cheese from '../../cheese.png';

import './style.css';

const ing = [
  {
    img: olives,
    date: '0,5',
    name: 'a',
    description: 'Olives'
  },
  {
    img: cheese,
    date: '0,5',
    name: 'b',
    description: 'Cheese'
  },
  {
    img: peppers,
    date: '0,5',
    name: 'l,',
    description: 'Peppers'
  },
  {
    img: sausage,
    date: '0,5',
    name: 'l,',
    description: 'Sausage'
  }
];

class IngredientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: []
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event, el) {
    if (event.target.checked === true) {
      this.setState(prevState => ({
        complete: [...prevState.complete, el]
      }));
    }
    if (event.target.checked === false) {
      this.setState(prevState => ({
        complete: prevState.complete.filter(item => item.name !== el.name)
      }));
    }
  }
  render() {
    const { complete } = this.state;
    const { history } = this.props;

    const newsStyle = {
      borderBottom: '1px solid red',
      marginBottom: '1.5rem'
    };

    const jsonIngredients = JSON.stringify(complete);
    localStorage.setItem('ingredients', jsonIngredients);

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Container style={{ maxWidth: '80%' }}>
            <h2
              className="h1-responsive font-weight-bold my-5 text-center"
              style={{ color: 'firebrick' }}
            >
              <Fa icon="cutlery" className="pr-2" />
              Choose Toppings
            </h2>
            <Row>
              <Col lg="6" md="8" className="float-left">
                {ing.map((el, i) => (
                  <div style={newsStyle} key={i}>
                    <Row>
                      <Col md="3">
                        <View hover rounded className="z-depth-1-half mb-4">
                          <img
                            className="img-fluid"
                            src={el.img}
                            alt={el.img}
                            style={{ backgroundColor: 'darksalmon' }}
                          />
                        </View>
                      </Col>
                      <Col md="9">
                        <p className="font-weight-bold dark-grey-text">
                          {el.data}
                        </p>
                        <div className="d-flex justify-content-between">
                          <Col size="11" className="text-truncate pl-0 mb-3">
                            {el.description}
                          </Col>

                          <label className="container">
                            <input
                              type="checkbox"
                              onChange={event => this.onChange(event, el)}
                            />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Col>
            </Row>
            <button
              className="btn peach-gradient"
              style={{ fontSize: '1em', color: 'midnightblue' }}
              onClick={() => history.push('/crust')}
            >
              Edit Crust
            </button>
            <button
              className="btn peach-gradient"
              style={{ fontSize: '1em', color: 'midnightblue' }}
              onClick={() => history.push('/finish')}
            >
              Select
            </button>
          </Container>
        </div>
      </div>
    );
  }
}

export default IngredientsPage;
