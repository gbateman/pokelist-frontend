import Constants from '../constants/constants.js';
import fetch from 'cross-fetch';

export function requestRoutes() {
  console.log("requestRoutes");
  return {
    type: Constants.HomeActions.REQUEST_ROUTES
  };
}

export function receiveRoutes(routes) {
  console.log("receiveRoutes");
  return {
    type: Constants.HomeActions.RECEIVE_ROUTES,
    routes
  }
}

export function fetchRoutes() {
  return dispatch => {
    dispatch(requestRoutes());
    return fetch('http://localhost:5000/routes')
      .then(res =>
        res.json(),
        err => console.log(err)
      )
      .then(json =>
        dispatch(receiveRoutes(json))
      )
  }
}
