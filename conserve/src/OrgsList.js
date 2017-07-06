import React from 'react';

export default function OrgsList({ orgs }){
  const emptyMessage = (
    <p>There are no organizations here.</p>
  );

  const orgsList = (
    <p>organizations list</p>
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
