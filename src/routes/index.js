import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Crust from '../components/crustList';
import Welcome from '../components/welcome';
import IngredientsPage from '../components/Ingredients';
import FinishCard from '../components/OrderList/test';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/crust" component={Crust} />
          <Route path="/topping" component={IngredientsPage} />
          <Route path="/finish" component={FinishCard} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
