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
      <div id="listPage" className="ui container">
        <div id="cardsBanner" className="ui raised centered very padded text container segment">
        <h2 id="h2HeadCards" className="ui header">Choose an Organization to learn more</h2>
      </div>
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
