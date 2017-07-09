import React from 'react';

export default function OrgCard({ org }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={org.logo} alt="Organization Logo" />
      </div>
      <div className="content">
        <div className="header">{org.org}</div>
        </div>
    </div>
  );
}

OrgCard.propTypes = {
  org: React.PropTypes.object.isRequired
}
