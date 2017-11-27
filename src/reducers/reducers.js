// import { combineReducers } from 'redux';

function getInitialState() {
  return {
    aString: "asdfasdf"
  };
}

function defaultReducer(state = getInitialState(), action) {
  switch(action.type) {
    default:
      return state;
  }
}

// const reducers = combineReducers({
//   defaultReducer
// });

export default defaultReducer;
