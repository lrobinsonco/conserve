import React from 'react';
import classnames from 'classnames';
import './App.css';



class Landing extends React.Component {
  render(){
    return(
      <div className= "landing">
        <img className="ui fluid image" src={require("./images/COplate-2.jpg")}/>

        <div className="row">
        <h1 className= "landing-title">Colorado Conservation Conversation</h1>
      </div>
      </div>
    )
  }
}

export default Landing;
