import Constants from '../constants/constants.js';

function getInitialState() {
  return {
    pokemon: []
  };
}

function homeReducer(state = getInitialState(), action) {
  switch(action.type) {
    case Constants.HomeActions.REQUEST_POKEMON:
      console.log("REQUEST_POKEMON");
      return state;
    case Constants.HomeActions.RECEIVE_POKEMON:
      console.log("RECEIVE_POKEMON");
      return Object.assign({}, state, {
        pokemon: action.pokemon
      });
    default:
      return state;
  }
}

export default homeReducer;
