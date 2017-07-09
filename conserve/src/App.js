import React, { Component } from 'react';
// import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import OrgsPage from './OrgsPage';
import OrgFormPage from './OrgFormPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item"  to="/">Home</Link>
          <Link className="item" to="/orgs">Organizations</Link>
          <Link className="item" to="/orgs/new">New organization</Link>
        </div>
        <Route exact path="/orgs" component={OrgsPage}/>
        <Route path="/orgs/new" component={OrgFormPage}/>
        <Route path="/org/:_id" component={OrgFormPage}/>
      </div>
    );
  }
}

export default App;
