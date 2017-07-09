import { SET_ORGS, ADD_ORG } from '../actions';

export default function orgs(state = [], action = {}){
  switch(action.type){
    case ADD_ORG:
      return [
        ...state,
        action.org
      ];
    case SET_ORGS:
      return action.orgs;
    default: return state;
  }
}
