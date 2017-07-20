import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import tree from './images/favicon.png'


export default function OrgCard({org, deleteOrg}) {
  return (
    <div className="ui raised blue link card">
      <div className="image">
        <Link to={`/org/${org._id}`} data={org} className="ui medium image">
          <img src={org.logo} alt="Organization Logo"/>
        </Link>
        <div className="extra content">
          <span className="right floated content">
            <img className="ui avatar image" src={tree} />
          </span>
          <span className="left floated star">
            <i className="star icon"></i>
            Favorite
          </span>
        </div>
      </div>
      {/* <div className="content">
        <div className="header">{org.org}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
          <Link to={`/org/${org._id}`} data={org} className="ui basic button green">See Projects</Link>
            <Link to={`/org/${org._id}`} className="ui basic button green">Edit</Link>
            <div className="ui basic button red" onClick={() => deleteOrg(org._id)}>Delete</div>
          </div>
        </div> */}
      {/* <div className="ui basic button red" onClick={() => deleteOrg(org._id)}>Delete</div> */}
    </div>
  );
}

OrgCard.propTypes = {
  org: PropTypes.object.isRequired,
  deleteOrg: PropTypes.func.isRequired
}
