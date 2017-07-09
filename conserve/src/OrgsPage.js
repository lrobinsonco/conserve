import React from 'react';
import PropTypes from 'prop-types';
import OrgsList from './OrgsList';
import { connect } from 'react-redux';
import {fetchOrgs, deleteOrg} from './actions';

class OrgsPage extends React.Component{
  componentDidMount() {
    this.props.fetchOrgs();
  }
  render(){
    return (
      <div>
        <h1>Organizations List</h1>

        <OrgsList orgs={this.props.orgs} deleteOrg={this.props.deleteOrg} />
      </div>
    );
  }
}

OrgsPage.propTypes = {
  orgs: PropTypes.array.isRequired,
  fetchOrgs: PropTypes.func.isRequired,
  deleteOrg: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return{
    orgs: state.orgs
  }
}

export default connect(mapStateToProps, { fetchOrgs, deleteOrg })(OrgsPage);
