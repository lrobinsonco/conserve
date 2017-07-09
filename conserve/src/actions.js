export const SET_ORGS = 'SET_ORGS';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText)
    error.response = response;
    throw error;
  }
}

export function setOrgs(orgs){
  return {
    type: SET_ORGS,
    orgs
  }
}

export function saveOrg(data) {
  return dispatch => {
    return fetch('/api/orgs', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}

export function fetchOrgs() {
  return dispatch => {
    fetch('http://localhost:8080/api/orgs')
      .then(res => res.json())
      .then(data => dispatch(setOrgs(data.orgs)));
  }
}
