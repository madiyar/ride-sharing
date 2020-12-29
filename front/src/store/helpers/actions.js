import { createAction } from 'redux-actions';
import {
  GET_CITIES,
  AUTH_USER,
  SET_ERROR
} from './constants';

export const getCities = createAction(GET_CITIES);
export const authUser = createAction(AUTH_USER);
export const setError = createAction(SET_ERROR);
