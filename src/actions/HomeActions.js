import Constants from '../constants/constants.js';
import { fetchError } from './Actions.js';
import fetch from 'cross-fetch';

export function requestRoutes() {
  return {
    type: Constants.HomeActions.REQUEST_ROUTES
  };
}

export function receiveRoutes(routes) {
  return {
    type: Constants.HomeActions.RECEIVE_ROUTES,
    routes
  };
}

export function fetchRoutes() {
  return dispatch => {
    dispatch(requestRoutes());
    return fetch('http://localhost:5000/routes')
      .then(res =>
        res.json(),
        err => dispatch(fetchError(err))
      )
      .then(json =>
        dispatch(receiveRoutes(json))
      );
  };
}
