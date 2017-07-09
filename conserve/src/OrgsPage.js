import React from 'react';
import PropTypes from 'prop-types';
import OrgsList from './OrgsList';
import { connect } from 'react-redux';
import {fetchOrgs} from './actions';

class OrgsPage extends React.Component{
  componentDidMount() {
    this.props.fetchOrgs();
  }
  render(){
    return (
      <div>
        <h1>Organizations List</h1>

        <OrgsList orgs={this.props.orgs} />
      </div>
    );
  }
}

OrgsPage.propTypes = {
  orgs: PropTypes.array.isRequired,
  fetchOrgs: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    orgs: state.orgs
  }
}

export default connect(mapStateToProps, {fetchOrgs})(OrgsPage);
