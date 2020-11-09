import { combineReducers } from 'redux';
import helpers from './helpers/reducer';
import trips from './trips/reducer';

const rootReducer = combineReducers({
  helpers,
  trips
});

export default rootReducer;
