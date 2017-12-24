import Constants from '../constants/constants.js';

function getInitialState() {
  return {
    pokemon: [],
    routes: []
  };
}

function homeReducer(state = getInitialState(), action) {
  console.log(action);
  switch(action.type) {
    case Constants.HomeActions.REQUEST_ROUTES:
      return state;
    case Constants.HomeActions.RECEIVE_ROUTES:
      return Object.assign({}, state, {
        routes: action.routes
      });
    default:
      return state;
  }
}

export default homeReducer;
