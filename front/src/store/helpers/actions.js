import { createAction } from 'redux-actions';
import {
  GET_CITIES,
  SET_ERROR
} from './constants';

export const getCities = createAction(GET_CITIES);
export const setError = createAction(SET_ERROR);
