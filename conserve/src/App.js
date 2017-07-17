import React, {Component} from 'react';
// import logo from './logo.svg';

import {Route, Link} from 'react-router-dom';
import OrgsPage from './OrgsPage';
import OrgFormPage from './OrgFormPage';
import OrgShow from './OrgShow';
import Landing from './Landing'
// import Image from './Image';
import './App.css';

const ActiveLink = ({label, to, activeOnlyWhenExact}) => (<Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
  <Link className={match
    ? 'active item'
    : 'item'} to={to}>{label}</Link>
)}/>)

class App extends Component {
  render() {
    return (

      <div className="App">
        <div id="topMenu" className="ui massive blue three item inverted menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home"/>
          <ActiveLink activeOnlyWhenExact to="/orgs" label="Orgs"/>
          <ActiveLink activeOnlyWhenExact to="/orgs/new" label="Add New Org"/>
        </div>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/orgs" component={OrgsPage}/>
        <Route path="/orgs/new" component={OrgFormPage}/>
        <Route path="/org/:_id" component={OrgShow}/>
        <div id="footer" className="ui blue secondary inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal height stackable grid">

            <div className="three wide column">
              <h4 className="ui inverted header">About</h4>
            <div className="ui inverted link list">
              <a href="mailto:threequarterr@gmail.com?Subject=Hello%20again" target="_top" className="item">Contact</a>
              <a href="https://github.com/lrobinsonco/conserve/tree/master/conserve" className="item">Github</a>
              <a href="#" className="item">Gazebo Plans</a>
            </div>
          </div>
          <div className="seven wide column">
            <h4 className="ui header">threequarterr websites</h4>
            <br></br>
            <p id="footer-info">©Colorado Conservation Conversation | 2017</p>
          </div>
        </div>
      </div>
      </div>
      </div>

    );
  }
}

export default App;
