import Constants from '../constants/constants.js';

export function fetchError(error) {
  return {
    type: Constants.Actions.FETCH_ERROR,
    error
  };
}
