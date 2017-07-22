/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * @description The OrdersContainer does the exact same thing as the UnauthenticatedContainer.
 *
 * @description It's responsible for Routing the Orders sub-pages.
 *
 * @description It only uses a Switch and Routes from 'react-router-dom'.
 *
 * @exports OrdersContainer
 */

/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
// @TODO implement prop-types
import { Route, Switch } from 'react-router-dom';

// Component imports
import OrdersCreateContainer from './Create/OrdersCreateContainer';
import OrdersIndexContainer from './Index/OrdersIndexContainer';
// import OrdersShowContainer from './Show/OrdersShowContainer';

export default class OrdersContainer extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/orders/create/:customer_id"
          component={OrdersCreateContainer}
        />
        <Route
          exact
          path="/orders"
          component={OrdersIndexContainer}
        />
      </Switch>
    );
  }
}


OrdersContainer.propTypes = {};


OrdersContainer.defaultProps = {};

