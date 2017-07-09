import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveOrg } from './actions';

class OrgsForm extends React.Component {
  state = {
    org: "",
    logo: "",
    errors: {},
    loading: false
  }

handleChange = (e) => {
  if (!!this.state.errors[e.target.name]){
    let errors = Object.assign({}, this.state.errors);
    delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
     });
   } else {
     this.setState({ [e.target.name]: e.target.value })
   }
  }

handleSubmit = (e) => {
  e.preventDefault();

  //validation
  let errors = {};
  if (this.state.org === '') errors.title = "Cannot be empty";
  if (this.state.logo === '') errors.logo = "Cannot be empty";
  this.setState({ errors });
  const isValid = Object.keys(errors).length === 0

  if (isValid) {
    const { org, logo } = this.state;
    this.setState({ loading: true });
    this.props.saveOrg({ org, logo}).then(
      () => {},
      (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
    )
  }
}



  render(){
    return (
      <form className={classnames('ui', 'form', { loading: this.state.loading })} onSubmit={this.handleSubmit}>
        <h1>Add new organization</h1>

        {!!this.state.errors.global && <div className='ui negative message'><p>{this.state.errors.global}</p></div>}

        <div className={classnames("field", {error: !!this.state.errors.org})}>
          <label htmlFor="org">Organization</label>
          <input
            name="org"
            value={this.state.org}
            onChange={this.handleChange}
            id="org"
            placeholder="enter organization"

          />
          <span>{this.state.errors.org}</span>
        </div>
        <div className={classnames("field", {error: !!this.state.errors.logo})}>
          <label htmlFor="logo">Logo URL</label>
          <input
            name="logo"
            value={this.state.logo}
            onChange={this.handleChange}
            id="logo"
            placeholder="copy and paste organization logo"
          />
          <span>{this.state.errors.logo}</span>
        </div>
        <div className="field">
          {this.state.logo !== '' &&<img src={this.state.logo} alt="logo" className="ui small bordered image" />}
        </div>
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveOrg })(OrgsForm);
