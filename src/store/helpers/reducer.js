import { handleActions } from 'redux-actions';
import {
  GET_CITIES,
  AUTH_USER,
  GET_USER,
  SET_ERROR
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  cities: {
    loading: false,
    data: []
  },
  authFormLoading: false,
  userLoading: false,
  currentUser: null,
  error: null
};

export default handleActions({
  [SET_ERROR + DONE]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  // GET CITIES
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
  // AUTH USER
  [AUTH_USER + LOADING]: (state, { payload }) => ({
    ...state,
    authFormLoading: true
  }),
  [AUTH_USER + FAIL]: (state, { payload }) => ({
    ...state,
    authFormLoading: false
  }),
  [AUTH_USER + DONE]: (state, { payload }) => ({
    ...state,
    authFormLoading: false,
    currentUser: payload
  }),
  // GET USER
  [GET_USER + LOADING]: (state, { payload }) => ({
    ...state,
    userLoading: true
  }),
  [GET_USER + FAIL]: (state, { payload }) => ({
    ...state,
    userLoading: false
  }),
  [GET_USER + DONE]: (state, { payload }) => ({
    ...state,
    userLoading: false,
    user: payload
  }),
}, initialState);
