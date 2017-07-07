import React from 'react';

class OrgsForm extends React.Component {
  state = {
    org: "",
    logo: "",
    errors: {}
  }

handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

handleSubmit = (e) => {
  e.preventDefault();

  //validation
  let errors = {};
  if (this.state.org === '') errors.title = "Cannot be empty";
  if (this.state.logo === '') errors.logo = "Cannot be empty";
  this.setState({ errors })

}



  render(){
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Add new organization</h1>
        <div className="field">
          <label htmlFor="org">Organization</label>
          <input
            name="org"
            value={this.state.org}
            onChange={this.handleChange}
            id="org"
          />
        </div>
        <div className="field">
          <label htmlFor="logo">Logo URL</label>
          <input
            name="logo"
            value={this.state.logo}
            onChange={this.handleChange}
            id="logo"
            placeholder="copy and paste organization logo"
          />
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

export default OrgsForm;
