import { createAction } from 'redux-actions';
import {
  GET_CITIES,
  AUTH_USER,
  SIGN_UP,
  GET_USER,
  SET_ERROR
} from './constants';

export const getCities = createAction(GET_CITIES);
export const authUser = createAction(AUTH_USER);
export const signUp = createAction(SIGN_UP);
export const getUser = createAction(GET_USER);
export const setError = createAction(SET_ERROR);