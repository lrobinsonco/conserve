import React from 'react';
import classnames from 'classnames';
import './App.css';

class Landing extends React.Component {
  render() {
    return (
      <div className={classnames("ui grid container", 'landing')}>
        {/* <img className="ui fluid image" alt="landing" src={require("./images/COplate-2.jpg")}/> */}

        <div className="ui container">
          <h1 id="landing-title" className="ui justified header">Colorado Conservation Conversation</h1>


        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Be Part of the Conversation</h2>
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition, f</p>
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition,</p>
          <div className="ui buttons">
            <button className="fluid ui positive button">Sign up</button>
            <div className="or"></div>
            <button className="fluid ui positive button">Sign in</button>
          </div>
        </div>

      </div>
    </div>

    )
  }
}

export default Landing;
