/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import createHashHistory from 'history/createHashHistory';

import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';


// Page imports
import CustomersContainer from './Customers/CustomersContainer';
import UnauthenticatedContainer from './Unauthenticated/UnauthenticatedContainer';


// Creating history
export const history = createHashHistory();


/**
 * @class Routes
 * @description The client-side router for the app
 * @description Different components should be rendered depending on route.
 * These components we render are the "pages" of our app.
 * @description We're not using an "exact" match route, so any route starting with "/" will render
 * the UnauthenticatedContainer.
 *
 */
export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            path="/customers"
            component={CustomersContainer}
          />
          <Route
            path="/"
            component={UnauthenticatedContainer}
          />
        </Switch>
      </Router>
    );
  }
}
