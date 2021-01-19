import { createAction } from 'redux-actions';
import {
  GET_CITIES,
  AUTH_USER,
  SIGN_UP,
  SET_ERROR
} from './constants';

export const getCities = createAction(GET_CITIES);
export const authUser = createAction(AUTH_USER);
export const signUp = createAction(SIGN_UP);
export const setError = createAction(SET_ERROR);
