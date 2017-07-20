import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {fetchOrg} from './actions';
import {connect} from 'react-redux';
import volunteer from './images/volunteer.jpeg'
import mccullough from './images/McCullough.png'

class ShowOrg extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchOrg(this.props.match.params._id)

  }
  render() {
    const org = this.props.org
    if (!org) {
      return null
    }
    return (
      <div id="show" className="container">
        <div className="ui two column grid">
          <div className="ui column">
            <a href={org.url}>
              <img className="ui fluid circular image" src={org.logo} alt="Organization Logo"/>
            </a>
          </div>
          <div className="ui column">
            <a href={org.url}>
              <h2 id="showHead" className="header">{org.org}</h2>
            </a>

            <div id="desc" className="ui raised centered padded text container segment">
              <h3 id="desc">{org.title}</h3>
              <p>{org.desc}</p>
            </div>
            <div className="ui container">
              <a href="https://www.google.com/maps/place/McCullough+Gulch/@39.3903327,-106.1220987,13z/data=!4m13!1m7!3m6!1s0x876af3a695baae01:0x1386cde4030b10db!2sQuandary+Peak!3b1!8m2!3d39.3972102!4d-106.1064092!3m4!1s0x0:0x705d871563657229!8m2!3d39.3848989!4d-106.0616255?hl=en&authuser=0">
              <img id="map" className="ui huge image" src={mccullough} alt="McCullough trailhead"/>
              </a>
            </div>
            <div className="ui container">
              <a href="https://www.instagram.com/p/BIBs-2LjPdD/">
              <img id="insta" className="ui large image" src={volunteer} alt="instagram"/>
              </a>
            </div>
            <div id="social" className="ui container">
            <button className="ui facebook button">
              <i className="facebook icon"></i>
              Facebook
            </button>
            <button className="ui twitter button">
              <i className="twitter icon"></i>
              Twitter
            </button>
            {/* <button class="ui instagram button">
              <i class="instagram icon"></i>
              Instagram
            </button> */}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const {match} = props;
  if (match.params._id) {
    return {
      org: state.orgs.find(item => item._id === match.params._id)
    }
  }

  return {org: null};
}

export default connect(mapStateToProps, {fetchOrg, volunteer})(ShowOrg);

// ShowOrg.propTypes = {
//   org: PropTypes.object.isRequired
// }

// export default class NameHERE extends Component {
//   constructor(){
//     super()
//     this.aFunction = this.afunction.bind(this)
//   }
// }
//
// afunction(){
//   this.props.1.2({
//     data: 3,
//
//   })
// }
