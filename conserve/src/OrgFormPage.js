import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveOrg, fetchOrg, updateOrg } from './actions';
import OrgsForm from './OrgsForm';

class OrgFormPage extends React.Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { match } = this.props;
    if (match.params._id) {
      this.props.fetchOrg(match.params._id);
    }
  }

  saveOrg = ({_id, org, logo }) => {
    if (_id) {
      return this.props.updateOrg({ _id, org, logo }).then(
        () => { this.setState({ redirect: true })},
      );
    } else {
      return this.props.saveOrg({ org, logo }).then(
        () => { this.setState({ redirect: true })},
      );
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ?
          <Redirect to="/orgs" /> :
          <OrgsForm
            org={this.props.org}
            saveOrg={this.saveOrg}
          />
        }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;
  if (match.params._id) {
    return {
      org: state.orgs.find(item => item._id === match.params._id)
    }
  }

  return { org: null };
}

export default connect(mapStateToProps, { saveOrg, fetchOrg, updateOrg })(OrgFormPage);
