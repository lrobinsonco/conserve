import { SET_ORGS } from '../actions';

export default function orgs(state = [], action = {}){
  switch(action.type){
    case SET_ORGS:
      return action.orgs;
    default: return state;
  }
}
