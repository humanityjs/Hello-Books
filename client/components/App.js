import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import AllBooks from './main/AllBooks';

import '../styles/style.scss';
/**
 * 
 * 
 * @export
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  /**
   * 
   * 
   * @returns {object} main App
   * @memberof App
   */
  render () {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signup' component={SignUpForm} />
          <Route exact path='/signin' component={SignInForm} />
          <Route exact path='/allbooks' component={AllBooks} />
        </Switch>
        </div>
      </Router>
    );
  }
}





