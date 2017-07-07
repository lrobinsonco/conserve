export const SET_ORGS = 'SET_ORGS';

export function setOrgs(orgs){
  return {
    type: SET_ORGS,
    orgs
  }
}

export function fetchOrgs() {
  return dispatch => {
    fetch('http://localhost:8080/api/orgs')
      .then(res => res.json())
      .then(data => dispatch(setOrgs(data.orgs)));
  }
}
