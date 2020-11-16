import { handleActions } from 'redux-actions';
import {
  GET_CITIES,
  SET_ERROR
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  cities: {
    loading: false,
    data: []
  },
  error: null
};

export default handleActions({
  [SET_ERROR + DONE]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
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
