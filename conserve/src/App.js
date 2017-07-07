import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  NavLink
}from 'react-router-dom';
import OrgsPage from './OrgsPage';
import OrgsForm from './OrgsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" to="/">Home</NavLink>
          <NavLink className="item" activeClassName="active" to="/orgs">Organizations</NavLink>
          <NavLink className="item" activeClassName="active" to="/orgs/new">New organization</NavLink>
        </div>
        <Route exact path="/orgs" component={OrgsPage}/>
        <Route path="/orgs/new" component={OrgsForm}/>
      </div>
    );
  }
}

export default App;
