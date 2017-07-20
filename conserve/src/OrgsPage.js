import React from 'react';
import PropTypes from 'prop-types';
import OrgsList from './OrgsList';
import {connect} from 'react-redux';
import {fetchOrgs, deleteOrg} from './actions';
import List from 'list.js';

class OrgsPage extends React.Component {
  componentDidMount() {
    this.props.fetchOrgs();

    var options = {
      valueNames: ['name']
    };

    // var hackerList = new List('hacker-list', options);

  }
  render() {
    return (
      <div id="listPage" className="ui container">
        <div id="cardsBanner" className="ui raised centered very padded text container segment">
          <h2 id="h2HeadCards" className="ui header">Choose an Organization to learn more</h2>

          {/* <div id="hacker-list"> */}
          <div>

            <select name="orgs" multiple="" className="ui fluid centered dropdown">
              <option value="">sort organizations</option>
            <option value="angular">Angular</option>
            <option value="css">CSS</option>
            <option value="design">Graphic Design</option>
            <option value="ember">Ember</option>
            <option value="html">HTML</option>
            <option value="ia">Information Architecture</option>
            <option value="javascript">Javascript</option>
            <option value="mech">Mechanical Engineering</option>
            <option value="meteor">Meteor</option>
            <option value="node">NodeJS</option>
            <option value="plumbing">Plumbing</option>
            <option value="python">Python</option>
            <option value="rails">Rails</option>
            <option value="react">React</option>
            <option value="repair">Kitchen Repair</option>
            <option value="ruby">Ruby</option>
            <option value="ui">UI Design</option>
            <option value="ux">User Experience</option>
            </select>

            {/* <span className="sort" data-sort="name">Sort by name</span> */}

            {/* <ul className="list">
              <li>
                <h3 className="name"></h3>
              </li>
            </ul> */}
          </div>
        </div>
        <OrgsList orgs={this.props.orgs} deleteOrg={this.props.deleteOrg}/>
      </div>
    );
  }
}

OrgsPage.propTypes = {
  orgs: PropTypes.array.isRequired,
  fetchOrgs: PropTypes.func.isRequired,
  deleteOrg: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {orgs: state.orgs}
}

export default connect(mapStateToProps, {fetchOrgs, deleteOrg})(OrgsPage);
