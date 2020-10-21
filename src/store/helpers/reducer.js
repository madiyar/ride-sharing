import { handleActions } from 'redux-actions';
import {
  GET_CITIES
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  cities: {
    loading: false,
    data: []
  }
};

const objToArray = payload => {
  return payload !== null ? Object.keys(payload).map(key => {
    return {
      ...payload[key],
      id: key
    }
  }) : [];
};

export default handleActions({
  [GET_CITIES + LOADING]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: true
    }
  }),
  [GET_CITIES + FAIL]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: false
    }
  }),
  [GET_CITIES + DONE]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: false,
      data: objToArray(payload)
    }
  }),
}, initialState);
