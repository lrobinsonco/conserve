import React from 'react';
import PropTypes from 'prop-types';
import OrgCard from './OrgCard';

export default function OrgsList({ orgs, deleteOrg }){
  const emptyMessage = (
    <p>There are no organizations here.</p>
  );

  const orgsList = (
    <div className="ui four cards">
      { orgs.map(org => <OrgCard org={org} key={org._id} deleteOrg={deleteOrg} />)}
    </div>
  );

  return(
    <div>
      {orgs.length === 0 ? emptyMessage : orgsList}
    </div>
  );
}

OrgsList.propTypes = {
  orgs: PropTypes.array.isRequired,
  deleteOrg: PropTypes.func.isRequired
}
