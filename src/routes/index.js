import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Crust from '../components/crustList';
import Welcome from '../components/welcome';
import IngredientsPage from '../components/Ingredients';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={Crust} />
          <Route path="/ingredients" component={IngredientsPage} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
