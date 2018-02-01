import Constants from '../constants/constants.js';

function getInitialState() {
  return {
    myTeamVisible: false,
    pokemon: [],
    routes: []
  };
}

function homeReducer(state = getInitialState(), action) {
  switch(action.type) {
    case Constants.HomeActions.REQUEST_ROUTES:
      return state;
    case Constants.HomeActions.RECEIVE_ROUTES:
      return Object.assign({}, state, {
        routes: action.routes
      });
    case Constants.HomeActions.OPEN_MY_TEAM:
      return Object.assign({}, state, {
        myTeamVisible: true
      });
    case Constants.HomeActions.CLOSE_MY_TEAM:
      return Object.assign({}, state, {
        myTeamVisible: false
      });
    default:
      return state;
  }
}

export default homeReducer;
