import React from 'react';
import OrgCard from './OrgCard';

export default function OrgsList({ orgs }){
  const emptyMessage = (
    <p>There are no organizations here.</p>
  );

  const orgsList = (
    <div className="ui four cards">
      { orgs.map(org => <OrgCard org={org} key={org._id} />)}
    </div>
  );

  return(
    <div>
      {orgs.length === 0 ? emptyMessage : orgsList}
    </div>
  );
}

OrgsList.propTypes = {
  orgs: React.PropTypes.array.isRequired
}
