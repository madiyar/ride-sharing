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
      data: payload
    }
  }),
}, initialState);
