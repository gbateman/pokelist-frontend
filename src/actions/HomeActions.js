import Constants from '../constants/constants.js';
import fetch from 'cross-fetch';

export function requestPokemon() {
  console.log("requestPokemon");
  return {
    type: Constants.HomeActions.REQUEST_POKEMON
  };
}

export function receivePokemon(pokemon) {
  console.log("receivePokemon");
  return {
    type: Constants.HomeActions.RECEIVE_POKEMON,
    pokemon
  }
}

export function fetchPokemon() {
  return dispatch => {
    dispatch(requestPokemon());
    return fetch('http://localhost:5000/')
      .then(res =>
        res.json(),
        err => console.log(err)
      )
      .then(json =>
        dispatch(receivePokemon(json))
      )
  }
}
