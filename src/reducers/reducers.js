import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer.js';

const reducers = combineReducers({
  home: HomeReducer
});

export default reducers;
