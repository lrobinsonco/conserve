import React from 'react';
import classnames from 'classnames';
import './App.css';

class Landing extends React.Component {
  render() {
    return (
      <div className={classnames("ui grid", 'landing')}>


        <div className="ui container">
          <h1 id="landing-title" className="ui justified header">Colorado Conservation Conversation</h1>


        <div className="ui raised centered very padded text container segment">
          <h2 id="h2Head" className="ui centered header">Be Part of the Conversation</h2>
          <p>Colorado is blessed with non-profit organizations dedicated to conservation and stewardship.</p>
          <p>From building and maintaining trails, advocating for public lands, to teaching stewardship skills to tomorrow’s leaders, these organizations are literally blazing the trail to Colorado’s future.</p>
          <div id="loginB" className="ui buttons">
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
