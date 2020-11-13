import { handleActions } from 'redux-actions';
import {
  GET_TRIPS,
  GET_TRIP
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  trips: {
    loading: false,
    data: []
  },
  trip: {
    loading: false,
    data: null
  },
};

export default handleActions({
  // GET TRIPS
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
  // GET TRIP
  [GET_TRIP + LOADING]: (state, { payload }) => ({
    ...state,
    trip: {
      ...state.trip,
      loading: true
    }
  }),
  [GET_TRIP + FAIL]: (state, { payload }) => ({
    ...state,
    trip: {
      ...state.trip,
      loading: false
    }
  }),
  [GET_TRIP + DONE]: (state, { payload }) => ({
    ...state,
    trip: {
      ...state.trip,
      loading: false,
      data: payload
    }
  }),
}, initialState);
