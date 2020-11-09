import { handleActions } from 'redux-actions';
import {
  GET_TRIPS
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  trips: {
    loading: false,
    data: []
  }
};

export default handleActions({
  [GET_TRIPS + LOADING]: (state, { payload }) => ({
    ...state,
    trips: {
      ...state.trips,
      loading: true
    }
  }),
  [GET_TRIPS + FAIL]: (state, { payload }) => ({
    ...state,
    trips: {
      ...state.trips,
      loading: false
    }
  }),
  [GET_TRIPS + DONE]: (state, { payload }) => ({
    ...state,
    trips: {
      ...state.trips,
      loading: false,
      data: payload
    }
  }),
}, initialState);
