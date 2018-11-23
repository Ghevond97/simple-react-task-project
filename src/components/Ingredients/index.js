import React, { Component } from 'react';

import { Container, Row, Col, Fa, View } from 'mdbreact';

import './style.css';

const ing = [
  {
    img: 'https://mdbootstrap.com/img/Photos/Others/photo8.jpg',
    date: '19/08/2018',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    img: 'https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg',
    date: '18/08/2018',
    description:
      'Soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    img: 'https://mdbootstrap.com/img/Photos/Others/photo8.jpg',
    date: '18/08/2018',
    description: 'Voluptatem accusantium doloremque'
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
        complete: prevState.complete.filter(item => item !== el)
      }));
    }

    console.log(event.target.checked, this.state);
  }
  render() {
    const newsStyle = {
      borderBottom: '1px solid red',
      marginBottom: '1.5rem'
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <Container style={{ maxWidth: '80%' }}>
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
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              id laborum.
            </p>
            <Row>
              <Col lg="6" md="8" className="float-left">
                {ing.map((el, i) => (
                  <div style={newsStyle} key={i}>
                    <Row>
                      <Col md="3">
                        <View hover rounded className="z-depth-1-half mb-4">
                          <img className="img-fluid" src={el.img} alt={i} />
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
                              onChange={event => this.onChange(event, el.img)}
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
          </Container>
        </div>
      </div>
    );
  }
}

export default IngredientsPage;
