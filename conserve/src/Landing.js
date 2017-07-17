import React from 'react';
// import classnames from 'classnames';
import './App.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing ui grid container">
        {/* <img className="ui fluid image" alt="landing" src={require("./images/COplate-2.jpg")}/> */}

        <div className="ui container">
          <h1 className="ui center aligned">Colorado Conservation Conversation</h1>
        </div>
        <div className="ui blurring segment">
          <div className="ui dimmer"></div>

        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Be Part of the Conversation</h2>
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors, which would have been pack hunters with complex body language. These sophisticated forms of social cognition and communication may account for their trainability, playfulness, and ability to fit into human households and social situations, and these attributes have given dogs a relationship with humans that has enabled them to become one of the most successful species on the planet today.</p>
        </div>
      </div>
      </div>

    )
  }
}

export default Landing;
