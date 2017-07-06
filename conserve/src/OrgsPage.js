import React from 'react';
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
  orgs: React.PropTypes.array.isRequired,
  fetchOrgs: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    orgs: state.orgs
  }
}

export default connect(mapStateToProps, {fetchOrgs})(OrgsPage);
