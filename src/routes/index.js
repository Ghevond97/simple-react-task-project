import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Crust from '../components/crustList';
import Welcome from '../components/welcome';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={Crust} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
