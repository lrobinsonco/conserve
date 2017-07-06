import React, { Component } from 'react';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import OrgsPage from './OrgsPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Link to="orgs">Organizations</Link>
        </p>
        <Route path="/orgs" component={OrgsPage}/>
      </div>
    );
  }
}

export default App;
