import { SET_ORGS, ADD_ORG, ORG_FETCHED, ORG_UPDATED } from '../actions';

export default function orgs(state = [], action = {}){
  switch(action.type){
    case ADD_ORG:
      return [
        ...state,
        action.org
      ];

      case ORG_UPDATED:
      return state.map(item => {
        if (item._id === action.org._id) return action.org;
        return item;
      });

      case ORG_FETCHED:
        const index = state.findIndex(item => item._id === action.org._id);
        if (index > -1){
          return state.map(item => {
            if (item._id === action.org._id) return action.org;
            return item;
          })
        } else {
          return [
            ...state,
            action.org
          ]
        }

    case SET_ORGS:
      return action.orgs;
    default: return state;
  }
}
