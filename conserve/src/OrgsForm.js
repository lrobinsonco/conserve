import React from 'react';
import classnames from 'classnames';
import './App.css';

class OrgsForm extends React.Component {
  state = {
    _id: this.props.org
      ? this.props.org._id
      : null,
    org: this.props.org
      ? this.props.org.org
      : '',
    logo: this.props.org
      ? this.props.org.logo
      : '',
    url: this.props.org
      ? this.props.org.url
      : '',
    title: this.props.org
        ? this.props.org.title
        : '',
    desc: this.props.org
      ? this.props.org.desc
      : '',
    errors: {},
    loading: false
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({_id: nextProps.org._id,
      org: nextProps.org.org,
      logo: nextProps.org.logo,
      url: nextProps.org.url,
      title: nextProps.org.title,
      desc: nextProps.org.desc})
  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    //validation
    let errors = {};
    if (this.state.org === '')
      errors.org = "Cannot be empty";
    if (this.state.logo === '')
      errors.logo = "Cannot be empty";
    if (this.state.url === '')
      errors.url = "Cannot be empty";

    this.setState({errors});
    const isValid = Object.keys(errors).length === 0

    if (isValid) {
      const {_id, org, logo, url, title, desc} = this.state;
      this.setState({loading: true});
      this.props.saveOrg({_id, org, logo, url, title, desc}).catch((err) => err.response.json().then(({errors}) => this.setState({errors, loading: false})));
    }
  }

  render() {
    const form = (
      <form id="form" className={classnames('ui', 'big form', {loading: this.state.loading})} onSubmit={this.handleSubmit}>
        <div id="formCol" className="ui two column grid">
          <div className="column">

            {!!this.state.errors.global && <div className='ui negative message'>
              <p>{this.state.errors.global}</p>
            </div>}

            <div className={classnames('twenty wide field', {
              error: !!this.state.errors.org
            })}>
              <label className="ui horizontal label" htmlFor="org">Organization</label>
              <input name="org" value={this.state.org} onChange={this.handleChange} id="org" placeholder="enter organization name"/>
              <span>{this.state.errors.org}</span>
            </div>

            <div className={classnames('twenty wide field', {
              error: !!this.state.errors.logo
            })}>
              <label className="ui horizontal label" htmlFor="logo">Logo URL</label>
              <input name="logo" value={this.state.logo} onChange={this.handleChange} id="logo" placeholder="copy and paste organization logo"/>
              <span>{this.state.errors.logo}</span>
            </div>

            <div className={classnames('twenty wide field', {
              error: !!this.state.errors.url
            })}>
              <label className="ui horizontal label" htmlFor="url">Home Page</label>
              <input name="url" value={this.state.url} onChange={this.handleChange} id="url" placeholder="copy and paste organization url"/>
              <span>{this.state.errors.url}</span>
            </div>

            <div className={classnames('twenty wide field', {
              error: !!this.state.errors.title
            })}>
              <label className="ui horizontal label" htmlFor="title">Project Title</label>
              <input name="title" value={this.state.title} onChange={this.handleChange} id="title" placeholder="enter project title"/>
              <span>{this.state.errors.title}</span>
            </div>


            <div className={classnames('twenty wide field', {
              error: !!this.state.errors.desc
            })}>
              <label className="ui horizontal label" htmlFor="description">Current Project</label>
              <textarea rows="4" name="desc" value={this.state.desc} onChange={this.handleChange} id="desc" placeholder="enter current project/s description"/>
              <span>{this.state.errors.desc}</span>
            </div>
          </div>
          <div className="column">

            {/* <div className="field">
              <button id="saveButton" className="ui primary button">Save</button>
            </div> */}

            <button id="saveButton" className="ui animated primary button" tabindex="0">
              <div className="visible content">Save Organization to List Page</div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </button>

            <div className="twelve wide field" id="logo">
              {this.state.logo !== '' && <img src={this.state.logo} alt="logo" className="ui centered huge bordered image"/>}
            </div>

          </div>
        </div>
      </form>
    )
    return (
      <div id="addPage">
        <br></br>
        <div id="formBanner" className="ui raised centered very padded text container segment">
          <h2 id="h2Headform" className="ui header">Add new organization</h2>
        </div>
        {form}
      </div>
    );
  }
}

export default OrgsForm;
