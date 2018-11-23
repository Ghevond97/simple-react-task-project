import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Crust from '../components/crustList';
import Welcome from '../components/welcome';
import IngredientsPage from '../components/Ingredients';
import OrderList from '../components/OrderList';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={Crust} />
          <Route path="/ingredients" component={IngredientsPage} />
            <Route path="/orderList" component={OrderList} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
