import React, { Component } from 'react';
// import logo from './logo.svg';

import {
  Route,
  Link,
}from 'react-router-dom';
import OrgsPage from './OrgsPage';
import OrgFormPage from './OrgFormPage';
import OrgShow from './OrgShow';
import Landing from './Landing'
// import Image from './Image';
import './App.css';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  )} />
)

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="ui massive blue three item inverted menu">
          <ActiveLink activeOnlyWhenExact  to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/orgs" label="Orgs" />
          <ActiveLink activeOnlyWhenExact to="/orgs/new" label="Add New Org" />
        </div>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/orgs" component={OrgsPage}/>
        <Route path="/orgs/new" component={OrgFormPage}/>
        <Route path="/org/:_id" component={OrgShow}/>
      </div>
    );
  }
}

export default App;
