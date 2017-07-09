export const SET_ORGS = 'SET_ORGS';
export const ADD_ORG = 'ADD_ORG';
export const ORG_FETCHED = 'ORG_FETCHED';
export const ORG_UPDATED = 'ORG_UPDATED';



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

export function addOrg(org) {
  return {
    type: ADD_ORG,
    org
  }
}

export function orgFetched(org) {
  return {
    type: ORG_FETCHED,
    org
  }
}

export function orgUpdated(org) {
  return {
    type: ORG_UPDATED,
    org
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
    .then(data => dispatch(addOrg(data.org)));
  }
}

export function updateOrg(data) {
  return dispatch => {
    return fetch(`/api/orgs/${data._id}`, {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
    .then(data => dispatch(orgUpdated(data.org)));
  }
}

export function fetchOrgs() {
  return dispatch => {
    fetch('http://localhost:8080/api/orgs')
      .then(res => res.json())
      .then(data => dispatch(setOrgs(data.orgs)));
  }
}

export function fetchOrg(id) {
  return dispatch => {
    fetch(`http://localhost:8080/api/orgs/${id}`)
      .then(res => res.json())
      .then(data => dispatch(orgFetched(data.org)));
  }
}
