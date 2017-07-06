export function fetchOrgs() {
  return dispatch => {
    fetch('/api/orgs');
  }
}
