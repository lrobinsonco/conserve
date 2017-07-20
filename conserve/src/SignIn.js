import React from 'react';
import classnames from 'classnames';
import './App.css';
import {Route, Link} from 'react-router-dom';

// import screen from '.images/screendark.png'


const ActiveLink = ({label, to, activeOnlyWhenExact}) => (<Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
  <Link className={match
    ? 'active item'
    : 'item'} to={to}>{label}</Link>
)}/>)

export default class SignIn extends React.Component{


  render(){
    return (
      <div id="sign">
        <div id="signContainer" className="ui container">
          <form id="signForm" className="ui form">
  <div className="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name"/>
  </div>
  <div className="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name"/>
  </div>
  <div className="field">
    <label>Email</label>
    <input type="text" name="email" placeholder="Enter Email"/>
  </div>
  <div className="field">
    {/* <div className="ui checkbox">
      <input type="checkbox" tabindex="1" className="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div> */}
  </div>
  <button className="ui button">
  <ActiveLink activeOnlyWhenExact to="/orgs/new" label="Add New Org"/>
  </button>
  {/* <button className="ui button" type="submit">Submit</button> */}
</form>
        </div>
      </div>
    )
  }
}

{/* <ActiveLink activeOnlyWhenExact to="/orgs/new" label="Add New Org"/> */}

// export default SignIn;
