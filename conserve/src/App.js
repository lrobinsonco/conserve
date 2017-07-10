import React, { Component } from 'react';
// import logo from './logo.svg';

import {
  Route,
  Link,
}from 'react-router-dom';
import OrgsPage from './OrgsPage';
import OrgFormPage from './OrgFormPage';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact  to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/orgs" label="Orgs" />
          <ActiveLink activeOnlyWhenExact to="/orgs/new" label="Add New Org" />
        </div>
        <Route exact path="/orgs" component={OrgsPage}/>
        <Route path="/orgs/new" component={OrgFormPage}/>
        <Route path="/org/:_id" component={OrgFormPage}/>
      </div>
    );
  }
}

export default App;
